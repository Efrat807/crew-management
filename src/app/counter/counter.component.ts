import { Component, computed, effect, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCount } from '../states/counter/counter.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { decrement, increment, reset } from '../states/counter/counter.actions';
import { AsyncPipe } from '@angular/common';
import { CounterStore } from '../store/counter.store';
import { CartStore } from '../store/cart.store';

@Component({
	selector: 'app-counter',
	standalone: true,
	imports: [AsyncPipe],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.scss',
	providers: [CounterStore, CartStore],
})
export class CounterComponent {
	count$: Observable<number>;
	counterStore = inject(CounterStore);
	// count = signal(0);
	// double = computed(() => this.count() * 2);

	constructor(private store: Store<AppState>) {
		this.count$ = this.store.select(selectCount);

		// effect(() => console.log('The current value: ' + this.count()));
	}

	//signal
	// increment() {
	// 	this.count.update((num) => num + 1);
	// }

	// decrement() {
	// 	this.count.update((num) => num - 1);
	// }

	// reset() {
	// 	this.count.set(0);
	// }

	//store - global state:

	// increment() {
	//   this.store.dispatch(increment())
	// }

	// decrement() {
	//   this.store.dispatch(decrement())
	// }

	// reset() {
	//   this.store.dispatch(reset())
	// }
}
