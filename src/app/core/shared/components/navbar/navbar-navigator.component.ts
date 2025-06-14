import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-navigator',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-corrections navbar-expand-lg ">
      <div class="container-fluid ">
        <a class="navbar-brand " href="#">
          <img [src]="path" style="height: 50px;" alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link  text-corrections"
                aria-current="page"
                routerLink="/home"
                routerLinkActive="active"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-corrections"
                routerLink="/menu"
                routerLinkActive="active"
                >Menù</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-corrections"
                routerLink="/cart"
                routerLinkActive="active"
                >Carrello</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar-corrections {
        background-color: rgb(136, 10, 17);
      }
      .text-corrections {
        font-size: 20px;
      }
      .text-corrections:hover {
        color: rgb(1, 255, 43);
        font-size: 25px;
      }
    `,
  ],
})
export class NavbarNavigatorComponent {
  path: string = 'assets/images/navbarlogo.png';
}
