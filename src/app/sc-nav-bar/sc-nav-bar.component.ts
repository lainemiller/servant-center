import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavOptions } from '../shared/models/nav-options-model';

@Component({
  selector: 'app-sc-nav-bar',
  templateUrl: './sc-nav-bar.component.html',
  styleUrls: ['./sc-nav-bar.component.scss'],
})
export class ScNavBarComponent implements OnInit {
  @Input() navOptions: NavOptions[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
