import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarNavigatorComponent } from "./core/shared/components/navbar/navbar-navigator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarNavigatorComponent],
  template: `
    <app-navbar-navigator />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-esame-app';
}
