import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { UserDetailsDto } from "../models/user-details-dto";
import { PaymentService } from "../services/payment.service";
import { PaymentFacade } from "../user-details-store/facade";

@Component({
  selector: "app-trial-form",
  templateUrl: "./trial-form.component.html",
  styleUrls: ["./trial-form.component.scss"],
})
export class TrialFormComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();

  userTrialForm: FormGroup;
  errorMessage: string;
  countries: any;
  dialCode: string;
  civIndex = 106;
  phoneNumber: string;

  constructor(
    private formBuilder: FormBuilder,
    private facade: PaymentFacade,
    private service: PaymentService
  ) {}

  ngOnInit() {
    this.errorMessage = "Please Fill all fields";
    this.buildForm();
    this.getCountries();
  }

  getCountries() {
    this.service
      .getCountriesData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  buildForm() {
    this.userTrialForm = this.formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[A-Za-z][A-Za-z -]*$"),
        ],
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[A-Za-z][A-Za-z -]*$"),
        ],
      ],
      email: [
        "",
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      monthlyAdvertisingBudget: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.maxLength(18),
          Validators.pattern("^[+]*[0-9]*$"),
        ],
      ],
      dialCode: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.min(1),
          Validators.max(99999),
        ],
      ],
    });
  }


  getTrial(form) {
    this.submitForm(form);
  }

  getDialCode(code: string) {
    this.dialCode = code;
  }

  getPhoneNumber(value){
    this.phoneNumber = value;
  }

  submitForm(form) {
    if (this.userTrialForm.status === "VALID") {
      const phoneNumber = this.phoneNumber.replace('+', '00');
      const paymentFormData: UserDetailsDto = {
        firstName: form.firstName.toString(),
        lastName: form.lastName.toString(),
        email: form.email.toString(),
        monthlyAdvertisingBudget: parseInt(form.monthlyAdvertisingBudget, 10),
        phoneNumber: parseInt(phoneNumber, 10),
      };

      this.facade.makePayment(paymentFormData);
    } else {
      this.errorMessage = "Please fill the form properly!";
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
