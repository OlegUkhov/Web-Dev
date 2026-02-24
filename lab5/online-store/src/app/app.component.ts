import {Component} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list';
import {ProductService} from './Services/productService';
import {inject} from '@angular/core';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productService = inject(ProductService);
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  selectCategory = (categoryId: number) => {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.products.filter(product => product.categoryId === categoryId);
  }
}

