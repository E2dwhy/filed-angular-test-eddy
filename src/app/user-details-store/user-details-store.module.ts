
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { UserDetailsStoreEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('userDetails', reducer),
    EffectsModule.forFeature([UserDetailsStoreEffects])
  ]
})
export class UserDetailsStoreModule { }
