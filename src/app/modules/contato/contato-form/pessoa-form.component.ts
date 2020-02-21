import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { UtilService } from 'src/app/shared/utils/util.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-pessoa-form',
	templateUrl: './pessoa-form.component.html',
	styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

	pessoa = new Pessoa();
	id: string;
	mode: 'new' | 'edit';

	constructor(
		private pessoaService: PessoaService,
		private route: ActivatedRoute,
		private utilService: UtilService, ) {


		this.route.queryParams.subscribe(params => {
			this.getParamsFromRoute(params);
		});
	}

	private getParamsFromRoute(params): void {
		this.id = params['id'];
		this.mode = params['mode'];

		if (this.id) this.buscarPessoa(this.id);
	}

	private buscarPessoa(id: string): any {
		this.pessoaService.getById(id).subscribe(
			_pessoa => {
				this.pessoa = _pessoa
			},
			_error => this.utilService.aviso('Erro ao buscar o contato')
		);
	}
	
	salvarContato(pessoa: Pessoa): any {
		this.pessoaService.save(pessoa).subscribe(
			_ok => {
				this.utilService.aviso('Lista atualizada com sucesso!');
				window.history.back();
			},
			_error => this.utilService.aviso('Erro ao tentar salvar')
		)
	}
}
