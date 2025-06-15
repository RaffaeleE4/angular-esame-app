import { Component, Input } from '@angular/core';
import { Pizza } from '../../../../model/pizza';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-card',
  imports: [CommonModule],
  template: `
    <div class="card-size">
      <div class="card" style="width: 18rem;">
        <img src="{{ pizza?.image }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ pizza?.name }}</h5>
          <p class="card-text">
            {{ pizza?.description }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `,
  styles: `
    .card-size {
      display: inline-block;
      margin: 0;
    }

    .card {
      width: 100%;
    }
    `,
})
export class PizzaCardComponent {
  @Input() pizza: Pizza | undefined;
}
