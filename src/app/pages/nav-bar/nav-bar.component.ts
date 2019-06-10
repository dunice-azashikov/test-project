import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public activeUrl = 'none';
  constructor(
    private _router: Router,
  ) {
    this._router.events.subscribe(
      (event: RouterEvent) => {
        this.activeUrl = event.url
      }
    );
  }

  ngOnInit() {
    this._router
  }
}
