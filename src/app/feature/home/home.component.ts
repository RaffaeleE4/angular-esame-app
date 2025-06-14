import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div>
      <div class="container-custom">
        <div class="menu-overlay">
          <ul class="menu-list">
            <li><a routerLink="/home" class="menu-item">Home</a></li>
            <li><a routerLink="/menu" class="menu-item">Menù</a></li>
            <li><a routerLink="/cart" class="menu-item">Carrello</a></li>
          </ul>
        </div>
        <img [src]="path" alt="" class="banner-img" />
      </div>
    </div>
  `,
  styles: [
    `

      .container-custom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #f8f9fa; /* Optional background color */
      }
      .banner-img {
        width: 1200px;
        max-width: 100vw;
        height: auto;
        display: block;
      }
      .menu-overlay {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .menu-item {
        color: black;
        text-decoration: none;
        font-size: 30px; /* Aumentato di altri 10px */
        display: block;
        margin: 10px 0;
        transition: color 0.3s;
      }
      .menu-item:hover {
        font-size: 35px;
        color: rgb(1, 255, 43);
      }
    `,
  ],
})
export class HomeComponent {
  path: string = 'assets/images/bannerhome.png';
}
