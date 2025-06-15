import { Component, Input } from '@angular/core';
import { Pizza } from '../../../../model/pizza';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../../../../services/pizza.service';

@Component({
  selector: 'app-pizza-card',
  imports: [CommonModule],
  template: `
    <div class="card-size">
      <div class="card">
        <img [src]="pizza?.image" class="card-img-top" alt="Immagine della pizza" />
        <div class="card-body">
          <h5 class="card-title">{{ pizza?.name }}</h5>
          <p class="card-text">{{ pizza?.description }}</p>
          <div class="card-actions">
            <button type="button" class="btn btn-success" (click)="addToCart()">Aggiungi al carrello</button>
            <span class="cart-counter">{{ getPizzaCount() }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card-size {
        display: inline-block;
        margin: 0;
      }

      .card {
        width: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.3s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .card-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      }

      .cart-counter {
        background-color: #d35400;
        color: white;
        padding: 5px 10px;
        border-radius: 50%;
        font-size: 14px;
        font-weight: bold;
      }
    `,
  ],
})
export class PizzaCardComponent {
  @Input() pizza: Pizza | undefined;

  constructor(private pizzaService: PizzaService) {}

  addToCart(): void {
    if (this.pizza) {
      this.pizzaService.addToCart(this.pizza);
    }
  }

  getPizzaCount(): number {
    return this.pizza ? this.pizzaService.getPizzaCount(this.pizza) : 0;
  }
}
