import {Component, Input, input} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card';
import {Product} from '../../models/product.model';
@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [
    ProductCardComponent
  ]
})
export class ProductListComponent {
  @Input() products!: Product[];
  onDelete(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
