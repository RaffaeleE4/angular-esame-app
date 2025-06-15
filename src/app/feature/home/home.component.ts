import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="container">
      Benvenuti da Dragon’s Pizza, la pizzeria che trasforma ogni morso in
      un'esperienza leggendaria! Ispirata alla forza e al fascino del drago, la
      nostra cucina unisce sapori intensi, ingredienti di prima qualità e un
      tocco di creatività infuocata. Dalle classiche Margherita e Diavola, alle
      nostre creazioni originali come la Drago Rosso (con nduja piccante e
      peperoni grigliati) o la Fiamma Bianca (base bianca con stracciatella,
      speck e miele), ogni pizza è cotta a regola d’arte nel nostro forno a
      legna, per un gusto autentico e irresistibile. 🍕 Ingredienti selezionati
      🔥 Impasto leggero e digeribile, a lunga lievitazione 🐉 Atmosfera unica,
      calda e accogliente Che tu scelga l’asporto, una serata in compagnia o una
      consegna rapida a casa, Dragon’s Pizza è sempre pronta a infiammare il tuo
      appetito!
    </div>
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
      .container {
        text-align: center;
        font-family: 'Arial', sans-serif;
        font-size: 1.2rem;
        line-height: 1.8;
        color: #333;
        margin-bottom: 30px;
      }

      .container-custom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #f8f9fa;
        position: relative;
      }
      .banner-img {
        width: 1200px;
        max-width: 100vw;
        height: auto;
        display: block;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
      .menu-overlay {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 200px;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }
      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .menu-item {
        color: black;
        text-decoration: none;
        font-size: 30px;
        display: block;
        margin: 10px 0;
        font-weight: bold;
        transition: color 0.3s, transform 0.3s;
      }
      .menu-item:hover {
        transform: scale(1.1);
        color: #d35400;
      }

      @media (max-width: 900px) {
        .container-custom {
          flex-direction: column;
          height: auto;
        }
        .banner-img {
          width: 100%;
          max-width: 100vw;
        }
        .menu-overlay {
          position: static;
          width: 100%;
          top: 0;
          left: 0;
          margin-bottom: 20px;
          justify-content: flex-start;
        }
        .menu-list {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
        }
        .menu-item {
          font-size: 22px;
          margin: 0 10px;
        }
        .menu-item:hover {
          font-size: 25px;
        }
      }

      @media (max-width: 600px) {
        .container-custom {
          padding: 10px;
        }
        .menu-list {
          flex-direction: column;
          align-items: center;
        }
        .menu-item {
          font-size: 18px;
          margin: 8px 0;
        }
        .menu-item:hover {
          font-size: 20px;
        }
        .banner-img {
          width: 100%;
        }
      }

    `,
  ],
})
export class HomeComponent {
  path: string = 'assets/images/bannerhome.png';
}
