import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(private router: Router) {}

  redirectHome() {
    this.router.navigate(['/home']);
  }
  redirectAssessment() {
    this.router.navigate(['/assessment']);
  }
  redirectPlan() {
    this.router.navigate(['/plan']);
  }
  redirectTracker() {
    this.router.navigate(['/tracker']);
  }
  redirectProfile() {
    this.router.navigate(['/profile']);
  }
}
