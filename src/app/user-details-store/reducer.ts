
import { Action, createReducer, on } from '@ngrx/store';
import { UserDetailsDto } from '../models/user-details-dto';
import * as PaymentPaymentActions from './actions';
// import { PaymentPaymentAdapter, initialState, State } from './state';

export const featureKey = 'UserTrialPayment';
export const currentDate = new Date();

export const initialUserDetailsDto: UserDetailsDto = {
    firstName: '',
    lastName: '',
    email: '',
    monthlyAdvertisingBudget: 0,
    phoneNumber: 0,
}

export interface PaymentState {
  isLoading?: boolean;
  error?: any;
  userDetails?: UserDetailsDto;
}

export const initialState: PaymentState = {
  isLoading: false,
  error: null,
  userDetails: initialUserDetailsDto
};


const featureReducer = createReducer(
  initialState,
  on(PaymentPaymentActions.payWithCardSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails: userDetails,
    isLoading: false,
    error: null
  }))
);

export function reducer(state: PaymentState, action: Action) {
  return featureReducer(state, action);
}
