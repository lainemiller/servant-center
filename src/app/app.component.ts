import { Component } from '@angular/core';
import { NavOptions } from './shared/models/nav-options-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servant-center';
  assetPath = "/assets/images/";
  example: NavOptions[] = [
    {
      name: "dashboard",
      url: "#",
      icon: this.assetPath + "dashboard.svg",
      color: "#A00000"
    },
    {
      name: "assessment",
      url: "#",
      icon: this.assetPath + 'assessment.svg',
      color: "#CC5600"
    },
    {
      name: "treatment plan",
      url: "#",
      icon: this.assetPath + 'treatment.svg',
      color: "#31326D"
    },
    {
      name: "health tracker",
      url: "#",
      icon: this.assetPath + 'health.svg',
      color: "#28714D"
    },
    {
      name: "profile",
      url: "#",
      icon: this.assetPath + 'profile.svg',
      color: "#0D5DA6"
    }
  ];

}
