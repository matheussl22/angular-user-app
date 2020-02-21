import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { PessoasComponent } from './contatos/pessoas.component';
import { PessoaFormComponent } from './contato-form/pessoa-form.component';
import { PessoaViewComponent } from './contato-view/pessoa-view.component';
import { CardPessoaComponent } from './card-contato/card-pessoa.component';

@NgModule({
	declarations: [
		PessoasComponent,
		PessoaFormComponent,
		PessoaViewComponent,
		CardPessoaComponent
	],
	imports: [
		MatFormFieldModule,
		MatButtonModule,
        MatInputModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		CommonModule,
		FormsModule,
		PipeModule,
	]
})
export class PessoaModule { }
