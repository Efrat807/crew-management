import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../shared/models/products.interface";

export const loadProduct = createAction('[Product Component] loadProduct');
export const loadProductSuccess = createAction(
    '[Product Component] loadProductSuccess',
    props<{products: IProduct[]}>()
)
export const loadProductFailed = createAction(
	'[Product Component] loadProductFailed',
	props<{ errorMessage: string }>()
);