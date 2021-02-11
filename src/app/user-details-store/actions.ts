
import { createAction, props } from '@ngrx/store';
import { UserDetailsDto } from '../models/user-details-dto';

export enum PaymentPaymentActionType {
  REFRESH = '[PaymentPayment] Refresh',
  PAY_WITH_CARD = '[PaymentPayment] Pay',
  PAY_WITH_CARD_SUCCESS = '[PaymentPayment] Payment Success',
  PAY_WITH_CARD_ERROR = '[PaymentPayment] Payment Error'
}


export const payWithCard = createAction(
  PaymentPaymentActionType.PAY_WITH_CARD,
  props<{ paymentData: UserDetailsDto }>()
);

export const payWithCardSuccess = createAction(
  PaymentPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ userDetails: UserDetailsDto }>()
);

export const payWithCardError = createAction(
  PaymentPaymentActionType.PAY_WITH_CARD_ERROR,
  props<{ error: string }>()
);


export const refresh = createAction(PaymentPaymentActionType.REFRESH);

