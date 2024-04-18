import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { IProduct } from '../shared/models/products.interface';
import { computed } from '@angular/core';

export interface CartState {
	products: IProduct[];
}
const initialCartState: CartState = {
	products: [],
};
const calculationTotalPrice = (products: IProduct[]) => {
	return products.reduce(
		(total, product) => total + (product.price || 0) * (product.quantity || 0),
		0
	) || 0;
};

export const CartStore = signalStore(
	{ providedIn: 'root' },
	withState(initialCartState),
	withComputed(({ products }) => ({
		totalPrice: computed(()=>calculationTotalPrice(products())) ,
	})),
	withMethods(({ products, ...store }) => ({
		addToCart(product: IProduct) {
			const updatedProduct = [...products(), product];
			patchState(store, { products: updatedProduct });
			console.log(products());
		},
		removeItem(id: number) {
			const updatedProduct = products().filter((a) => a.id !== id);
			patchState(store, { products: updatedProduct });
			console.log(products(), 'removed');
		},
		increment(id: number) {
			const updatedProduct = products().map((product) =>
				product.id === id
					? { ...products, quantity: product?.quantity && product.quantity + 1 }
					: product
			);
			patchState(store, { products: updatedProduct });
		},
		decrement(id: number) {
			const updatedProduct = products().map((product) =>
				product.id === id
					? { ...products, quantity: product?.quantity && product.quantity - 1 }
					: product
			);
			patchState(store, { products: updatedProduct });
		},
	}))
);
