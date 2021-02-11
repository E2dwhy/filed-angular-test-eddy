import { get } from "lodash";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  withLatestFrom,
} from "rxjs/operators";
import { routerNavigatedAction } from "@ngrx/router-store";

// import { PaymentPaymentAdapter } from 'src/app/core/adapter';
import { PaymentService } from "../services/payment.service";
import { payWithCard, payWithCardError, payWithCardSuccess } from "./actions";
import { Router } from "@angular/router";
import { ToasterService } from "angular2-toaster";

@Injectable()
export class PaymentStoreEffects {
  constructor(
    private dataService: PaymentService,
    private toasterService: ToasterService,
    private router: Router,
    private actions$: Actions
  ) {}

  proceedPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(payWithCard),
      concatMap((action) => {
        return of(action).pipe(withLatestFrom());
      }),
      mergeMap(([action]) => {
        const { paymentData } = action;
        return this.dataService.processPayment(paymentData).pipe(
          map((response) => {
            let returnedAction;
            if (response.status === 200) {
              this.toasterService.pop(
                "success",
                "SUCCESSFUL",
                "Your payment was successful"
              );
              returnedAction = payWithCardSuccess({ userDetails: paymentData });
              this.router.navigate([""]);
            } else {
              this.toasterService.pop(
                "error",
                "FAILURE",
                "Your payment Failed please try again later"
              );
              returnedAction = payWithCardError({
                error: "Something went wrong please try again",
              });
            }
            return returnedAction;
          }),
          catchError((error) => {
            return of(payWithCardError({ error }));
          })
        );
      })
    )
  );
}
