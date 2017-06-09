import { Component, OnInit } from '@angular/core';

import { IProduct } from './../product';
import { ProductService } from './../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    filterList: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) {
     }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Prodcut List: ' + message;

    }

}
