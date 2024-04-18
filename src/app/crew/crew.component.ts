import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';
import { FuncComponent } from '../func/func.component';

@Component({
	selector: 'app-crew',
	standalone: true,
	imports: [CrewDesignationsComponent, FuncComponent],
	templateUrl: './crew.component.html',
	styleUrl: './crew.component.scss',
})
export class CrewComponent {
	messageFromParent: string = 'hello world';
	userToken: string = '';
	receivingMessage: string = '';

	receivingMessageFunc(message: string): void {
		this.receivingMessage = message;
	}
}
