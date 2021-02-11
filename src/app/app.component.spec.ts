import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PaymentStoreEffects } from './user-details-store/effects';
import { PaymentFacade } from './user-details-store/facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { State } from './user-details-store/index';
import { initialState } from  './user-details-store/reducer';
import { of } from 'rxjs';


describe('AppComponent', () => {
    let store: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'filed-test-eddy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('filed-test-eddy');
  });
});
