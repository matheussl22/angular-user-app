import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone/phone.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
	declarations: [
		PhonePipe,
		CpfPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		PhonePipe,
		CpfPipe
	]
})
export class PipeModule { }
