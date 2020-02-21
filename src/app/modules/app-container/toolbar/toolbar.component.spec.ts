import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ToolbarComponent
			],
			imports: [	
				RouterTestingModule,
				MatSnackBarModule,
			],
			providers: [
			],
			schemas: [
				NO_ERRORS_SCHEMA
			]

		})
			.overrideTemplate(ToolbarComponent, '')
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
