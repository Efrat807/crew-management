import { Component } from '@angular/core';

@Component({
	selector: 'app-func',
	standalone: true,
	imports: [],
	templateUrl: './func.component.html',
	styleUrl: './func.component.scss',
})
export class FuncComponent {
	link: string = 'http://google.com';
	className: string = 'c1';
	disabled: boolean = false;

	print() {
		console.log('printed');
	}

	buttonClick() {
		this.disabled = !this.disabled;
	}
	onmouseover() {
		this.className = this.className == 'c1' ? 'c2' : 'c1';
	}
  onmouseleave() {
		this.className = this.className == 'c1' ? 'c2' : 'c1';
	}
}
