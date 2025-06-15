import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Pizza } from '../../model/pizza';
import { CommonModule } from '@angular/common';
import { PizzaCardComponent } from '../../core/shared/components/card/pizza-card.component';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, PizzaCardComponent],
  template: `
    <div class="menu-container">
      <h1 class="menu-title">Le nostre pizze</h1>
      <div class="pizza-grid">
        <app-pizza-card *ngFor="let pizza of pizzas" [pizza]="pizza"></app-pizza-card>
      </div>
    </div>
  `,
  styles: [
    `
      .menu-container {
        padding: 20px;
        text-align: center;
      }

      .menu-title {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #d35400;
      }

      .pizza-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
        overflow: hidden;
        width: 100%;
      }

      app-pizza-card {
        transition: transform 0.3s, box-shadow 0.3s;
        transform-origin: center;
      }

      app-pizza-card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class MenuComponent {
  http = inject(HttpClient);
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.http
      .get<Pizza[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((data) => {
        this.pizzas = data;
      });
  }

  addToCart(pizza: Pizza): void {
    this.pizzaService.addToCart(pizza);
  }

  getPizzaCount(pizza: Pizza): number {
    return this.pizzaService.getPizzaCount(pizza);
  }
}
