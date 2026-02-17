import {Component, input, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.model'

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `product-card.html`,
  styleUrl: `product-card.css`
})
export class ProductCardComponent {
  @Input() product!: Product;
  showShareMenu: boolean = false;
  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }
  shareOnWhatsApp(): void {
    const message = `Check out this product: ${this.product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    this.showShareMenu = false;
  }
  shareOnTelegram(): void {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(telegramUrl, '_blank');
    this.showShareMenu = false;  // Закрыть меню после клика
  }

}
