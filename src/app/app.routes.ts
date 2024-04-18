import { Routes } from '@angular/router';
import { FuncComponent } from './func/func.component';
import { CounterComponent } from './counter/counter.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
	{
		//מרנדר את הקומפוננטה בעליית האפליקציה
		path: 'func',
		component: FuncComponent,
	},
	{
		path: 'counter',
		component: CounterComponent,
	},
	{
		path: 'cart',
		component: CartComponent,
	},
	{
		path: 'products',
		component: ProductComponent
	},
	{
		// מרנדר את הקומפוננטה רק כאשר מגיע לניתוב זה 
		path: 'header',
		loadComponent: () =>
			import('./header/header.component').then((c) => c.HeaderComponent),
	},
];
