
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moduleFeatureKey } from ".";
import { featureKey, PaymentState } from "./reducer";

export const selectPaymentState = (state): PaymentState => state[moduleFeatureKey][featureKey];
const getUserDetails = createSelector(selectPaymentState, state => state.userDetails);

export const PaymentQuery = {
  selectPaymentState,
  getUserDetails
};
