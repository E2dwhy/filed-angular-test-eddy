/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrialFormComponent } from './trial-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentStoreEffects } from '../user-details-store/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from  '../user-details-store/reducer';
import { PaymentFacade } from '../user-details-store/facade';
import { of } from 'rxjs';

describe('TrialFormComponent', () => {
  let component: TrialFormComponent;
  let fixture: ComponentFixture<TrialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ TrialFormComponent ],
      providers: [
        PaymentStoreEffects,
        provideMockStore({ initialState }),
        {
          provide: PaymentFacade,
          useValue: {
            form$: of({})
          }
        },

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
