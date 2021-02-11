
import * as fromPaymentPaymentStoreActions from './actions';
import * as fromPaymentPaymentStoreEffects from './effects';
import * as fromPaymentPaymentStoreSelectors from './selectors';
import * as fromPaymentPaymentStoreReducer from './reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './reducer';
export {
    fromPaymentPaymentStoreActions,
    fromPaymentPaymentStoreEffects,
    fromPaymentPaymentStoreSelectors,
    fromPaymentPaymentStoreReducer
};

export const moduleFeatureKey = 'State';

export interface paymentModuleState {
  [fromPaymentPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromPaymentPaymentStoreReducer.featureKey]: fromPaymentPaymentStoreReducer.initialState,
};

export interface State {
  [moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(moduleFeatureKey, {
  factory: () => ({
    [fromPaymentPaymentStoreReducer.featureKey]: fromPaymentPaymentStoreReducer.reducer,
  })
});

