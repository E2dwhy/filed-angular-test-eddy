/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaymentService } from './payment.service';

describe('Service: Payment', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],

      providers: [PaymentService],
    });
  });

  it('should ...', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));

  it('Should return success status on payWithCard', () => {
    const service: PaymentService = TestBed.inject(PaymentService);
    const mockPaymentData = {
      firstName: 'Test',
      lastName: 'Name',
      email: 'test@gmail.com',
      monthlyAdvertisingBudget: 2000,
      phoneNumber: parseInt('0022551421307',10),
    };
    const mockResponse = {
      status: 'success',
      message: 'Payment processed successfully!',
    };

    service.processPayment(mockPaymentData).pipe(takeUntil(new Subject())).subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    }

    );
  });
});
