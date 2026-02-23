import { Component, input, output} from "@angular/core";
import { Product } from "../../models/product.model";
import { CommonModule } from "@angular/common";
import { ProductItemComponent } from "../product-item/product-item";

@Component({
    selector: 'product-list',
    imports: [CommonModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrls:  ['./product-list.component.css'],
    standalone:true,
})

export class ProductListComponent{
   products = input<Product[]>([]);
   delete = output<number>();

   onDelete(id: number){
    this.delete.emit(id);
   }
}