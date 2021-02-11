import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserDetailsDto } from "../models/user-details-dto";
import { payWithCard, payWithCardSuccess } from "./actions";
import { PaymentQuery } from "./selectors";

@Injectable()
export class PaymentFacade {
  readonly data$: Observable<UserDetailsDto>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(PaymentQuery.getUserDetails));
  }

  makePayment(paymentData: UserDetailsDto) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(PaymentData) {
    this.store.dispatch(payWithCardSuccess(PaymentData))
  }
}
