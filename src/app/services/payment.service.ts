import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  processPayment(data): Observable<any> {
    const mockResponse = {
      status: "success",
      message: "Payment processed successfully!",
    };
    // this is mock response for a successull operation
    return of(new HttpResponse({ status: 200, body: mockResponse }));

    // this is the actual post request
    // return this.http.post("https://someurl", data).pipe(
    //   map((response) => {
    //     return (response = mockResponse);
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     return throwError(error);
    //   })
    // );
  }

  getCountriesData(): Observable<any> {
    return this.http.get("https://restcountries.eu/rest/v2").pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
