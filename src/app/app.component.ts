import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(private router: Router, private sidebarService: NbSidebarService) {}

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

  toggleCompact() {
    this.sidebarService.toggle(false, 'left');
  }
}
