import { Component } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { StripeService } from 'ngx-stripe';
import { switchMap } from 'rxjs';
import { environment } from './environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stripe_payments';
  baseUrl = environment.apiUrl;
  
  constructor(
    private stripeService: StripeService,
    private http: HttpClient) {
    console.log('AppComponent.constructor()');
    
  }

  checkout() {
    
    // Check the server.js tab to see an example implementation
    this.http.post(`${this.baseUrl}/create-checkout-session`, {})
      .pipe(
        switchMap((session: any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session["id"] })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
