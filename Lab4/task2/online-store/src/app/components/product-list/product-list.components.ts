import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../models/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule], 
  templateUrl: './product-list.components.html',
  styleUrls: ['./product-list.components.css'],
  standalone: true
})

export class ProductList {
  products: Product[] = PRODUCTS;
  roundRating(rating: number) : number{
    return Math.round(rating);
  }
  shareWhatsApp(link: string) {
  const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + link)}`;
  window.open(url, '_blank');
}

  shareTelegram(link: string, name: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  }

  nextImage(product: Product) {
    const i = product.images.indexOf(product.image);
    product.image = product.images[(i + 1) % product.images.length];
  }
}
