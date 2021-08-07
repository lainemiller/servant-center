import { Component } from '@angular/core';
import { NavOptions } from './shared/models/nav-options-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servant-center';
  example: NavOptions[] = [
    {
      name: "dashboard",
      url: "#",
      icon: "https://d1icd6shlvmxi6.cloudfront.net/gsc/48II62/fa/40/79/fa4079610b9a4606bb28a30f61084310/images/veteran_landing_page/u596.svg?token=35a6255624a4e78c141a8ebcefebc459bf4c327e507bb92d5778b8acde6f23e5",
      color: "#A00000"
    },
    {
      name: "assessment",
      url: "#",
      icon: "https://d1icd6shlvmxi6.cloudfront.net/gsc/48II62/fa/40/79/fa4079610b9a4606bb28a30f61084310/images/veteran_landing_page/u593.svg?token=56a42ace4822caa0c7ac362e03e7229f27b7bbee5b8b346631c8b6207d197531",
      color: "#CC5600"
    },
    {
      name: "treatment plan",
      url: "#",
      icon: "https://d1icd6shlvmxi6.cloudfront.net/gsc/48II62/fa/40/79/fa4079610b9a4606bb28a30f61084310/images/veteran_landing_page/u592.svg?token=f71ff72a3504a1cb9264dd3c6a466aac304e7ff837220b3367990c8e6a1e1db2",
      color: "#31326D"
    },
    {
      name: "health tracker",
      url: "#",
      icon: "https://d1icd6shlvmxi6.cloudfront.net/gsc/48II62/fa/40/79/fa4079610b9a4606bb28a30f61084310/images/veteran_landing_page/u590.svg?token=8398e6ecbf20c9bddc5c898d052996e215170806686d72c6ca743abcc2e794ec",
      color: "#28714D"
    },
    {
      name: "profile",
      url: "#",
      icon: "https://d1icd6shlvmxi6.cloudfront.net/gsc/48II62/fa/40/79/fa4079610b9a4606bb28a30f61084310/images/veteran_landing_page/u595.svg?token=823559a6370a44e831c091b7cd211c45b9830ec38db7fd4abdc654a72072233b",
      color: "#0D5DA6"
    }
  ];

}
