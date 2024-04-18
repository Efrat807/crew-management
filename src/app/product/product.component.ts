import { Component, OnInit, inject } from '@angular/core';
import { ProductApiService } from '../shared/services/product-api.service';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/products.interface';
import * as ProductActions from '../states/product/product.action';
import * as ProductSelectors from '../states/product/product.selector';
import { Store } from '@ngrx/store';
import { CartComponent } from '../cart/cart.component';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CartComponent, AsyncPipe],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss',
	providers: [HttpClient],
})
export class ProductComponent implements OnInit {
	http = inject(HttpClient);
	productApi = inject(ProductApiService);
	products$!: Observable<IProduct[]>;

	constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
		this.store.dispatch(ProductActions.loadProduct());
		this.products$! = this.store.select(ProductSelectors.selectAllProducts);
	}
	ngOnInit(): void {
		console.log("it works");
		
	}

	// addItemToCart(product: IProduct) {
	//   this.store.dispatch(addToCart({product}))
	// }
}
