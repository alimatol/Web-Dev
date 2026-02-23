import { Component, input, output } from "@angular/core";
import { Product } from "../../models/product.model";
import { CommonModule } from "@angular/common";
@Component({
    selector: 'app-product-item',
    templateUrl: `./product-item.html`,
    styleUrl: './product-item.css',
    standalone: true,
    imports: [CommonModule],
})

export class ProductItemComponent{
    product = input.required<Product>();
    delete = output<number>();

    liked = true;
    like(){
        if (this.liked) {
            this.product().likes--;
        } else {
            this.product().likes++;
        }
        this.liked = !this.liked;
    }
    remove(){
        this.delete.emit(this.product().id);
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
      roundRating(rating: number): number {
        return Math.round(rating);
    }
}