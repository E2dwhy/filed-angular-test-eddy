import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { TrialFormComponent } from "./trial-form/trial-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ToasterModule, ToasterService } from "angular2-toaster";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { PaymentService } from "./services/payment.service";
import { PaymentFacade } from "./user-details-store/facade";
import { PaymentStoreEffects } from "./user-details-store/effects";
import * as storeModuleConfiguration from './user-details-store';

@NgModule({
  declarations: [AppComponent, LandingComponent, TrialFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    ToasterModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot(),
    StoreModule.forFeature(storeModuleConfiguration.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
    EffectsModule.forFeature([PaymentStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PaymentService, ToasterService, PaymentFacade, PaymentStoreEffects],
  bootstrap: [AppComponent]
})
export class AppModule {}
