import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  public cart = signal<any[]>([]); // Reso pubblico per consentire l'accesso dal componente

  getCart(): any[] {
    return this.cart();
  }

  addToCart(pizza: any): void {
    const currentCart = this.cart();
    const existingItem = currentCart.find((item) => item.id === pizza.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.set([...currentCart, { ...pizza, quantity: 1 }]);
    }
  }

  decrementQuantity(pizza: any): void {
    const currentCart = this.cart();
    const existingItem = currentCart.find((item) => item.id === pizza.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      this.removeFromCart(pizza);
    }
  }

  removeFromCart(pizza: any): void {
    const currentCart = this.cart();
    this.cart.set(currentCart.filter((item) => item.id !== pizza.id));
  }

  getPizzaCount(pizza: any): number {
    const item = this.cart().find((cartItem) => cartItem.id === pizza.id);
    return item ? item.quantity : 0;
  }
}
