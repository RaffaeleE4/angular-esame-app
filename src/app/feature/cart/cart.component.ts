import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule], // Aggiunto CommonModule per supportare NgIf e NgFor
  template: `
    <div class="cart-container">
      <h1 class="cart-title">Carrello</h1>
      <div *ngIf="cartItems.length > 0; else emptyCart">
        <div *ngFor="let item of cartItems" class="cart-item">
          <h2>{{ item.name }}</h2>
          <p>Prezzo: {{ item.price }} €</p>
          <p>Quantità: {{ item.quantity }}</p>
          <div class="cart-actions">
            <button (click)="increment(item)" class="btn btn-success">Aggiungi</button>
            <button (click)="decrement(item)" class="btn btn-warning">Rimuovi</button>
            <button (click)="remove(item)" class="btn btn-danger">Elimina</button>
          </div>
        </div>
        <h3 class="cart-total">Totale: {{ total }} €</h3>
        <button (click)="checkout()" class="btn btn-primary checkout-btn">Acquista</button>
      </div>
      <ng-template #emptyCart>
        <p>Il carrello è vuoto.</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .cart-container {
        padding: 20px;
        max-width: 800px;
        margin: auto;
      }

      .cart-title {
        text-align: center;
        margin-bottom: 20px;
        color: #d35400;
      }

      .cart-item {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .cart-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
      }

      .cart-total {
        text-align: right;
        margin-top: 20px;
        font-size: 1.5rem;
        color: #27ae60;
      }

      .checkout-btn {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 1.2rem;
        margin-top: 20px;
      }
    `,
  ],
})
export class CartComponent {
  constructor(private pizzaService: PizzaService) {}

  get cartItems(): any[] {
    return this.pizzaService.cart(); // Utilizzo del segnale come array
  }

  get total(): number {
    return this.cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
  }

  increment(item: any): void {
    this.pizzaService.addToCart(item);
  }

  decrement(item: any): void {
    this.pizzaService.decrementQuantity(item);
  }

  remove(item: any): void {
    this.pizzaService.removeFromCart(item);
  }

  checkout(): void {
    alert('Grazie dell\'acquisto!');
    this.pizzaService.cart.set([]); // Svuota il carrello
  }
}
