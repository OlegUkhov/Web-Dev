import {Component} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list';
import {ProductCardComponent} from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'online-store';
}

