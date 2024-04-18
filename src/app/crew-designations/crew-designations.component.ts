import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-crew-designations',
	standalone: true,
	imports: [],
	templateUrl: './crew-designations.component.html',
	styleUrl: './crew-designations.component.scss',
})
export class CrewDesignationsComponent {
	@Input() message: string = '';
	@Input() token: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from child to parent");
  }
}
