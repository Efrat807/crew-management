import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatButtonModule, CrewComponent, CounterComponent,AsyncPipe],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'crew-management';

	count$: Observable<number>;

	constructor(private store: Store<AppState>) {
		this.count$ = this.store.select(selectCount);
	}
}
// export class AppComponent implements OnInit {
// 	ngOnInit(): void {
// 		console.log('well done');
// 	}
// 	title = 'crew-management';
// }
