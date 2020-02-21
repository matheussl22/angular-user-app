import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { PessoasComponent } from './contatos/pessoas.component';
import { PessoaFormComponent } from './contato-form/pessoa-form.component';
import { PessoaViewComponent } from './contato-view/pessoa-view.component';
import { CardPessoaComponent } from './card-contato/card-pessoa.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
	declarations: [
		PessoasComponent,
		PessoaFormComponent,
		PessoaViewComponent,
		CardPessoaComponent
	],
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
        MatInputModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		CommonModule,
		FormsModule,
		PipeModule,
		MatDatepickerModule,
	]
})
export class PessoaModule { }
