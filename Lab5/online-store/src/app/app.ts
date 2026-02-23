import { Component, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: `./app.html`,
  styleUrl: './app.css',
  imports: [CommonModule, ProductListComponent],
  standalone: true, 
})

export class App {
  categories: Category[] = [];
  selectedCategoryId: number |null = null;
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.categories = this.productService.getCategory();
  }
  selectCategory(id: number){
    this.selectedCategoryId = id;
    this.products = this.productService.getProductsByCategoryId(id);
  }

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
