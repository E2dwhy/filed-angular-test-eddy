import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs';
import { UserDetailsDto } from './models/user-details-dto';
import { PaymentFacade } from './user-details-store/facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filed-test-eddy';
  showButton: boolean;
  userDetailsState$: Observable<UserDetailsDto>;
  toasterConfig: ToasterConfig;

  constructor(router:Router, private facade: PaymentFacade) {
    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-full-width',
      timeout: 3000
    });

    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.showButton = event.url === '/';
        }
      });

      this.userDetailsState$ = facade.data$;
    }
  }
