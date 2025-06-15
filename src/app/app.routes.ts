import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { FilenotfoundComponent } from './core/filenotfound.component';
import { CartComponent } from './feature/cart/cart.component';
import { MenuComponent } from './feature/menu/menu.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CartComponent},
  { path: 'menu', component: MenuComponent},

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '404', component: FilenotfoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
