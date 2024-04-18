import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/products.interface';
import * as ProductActions from './product.action';

export interface ProductState {
	products: IProduct[];
	error: string | null;
}
export const initialProductState: ProductState = {
	products: [],
	error: null,
};

export const ProductReducer = createReducer(
	initialProductState,
	on(
		ProductActions.loadProductSuccess,
		(state, { products }) => ({
			...state,
			products,
			error: null,
		})
	),
	on(
		ProductActions.loadProductFailed,
		(state, { errorMessage }) => ({
			...state,
			error: errorMessage.toString(),
		})
	)
);
