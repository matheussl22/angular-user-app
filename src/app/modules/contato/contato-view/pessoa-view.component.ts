import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { UtilService } from 'src/app/shared/utils/util.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
	selector: 'app-pessoa-view',
	templateUrl: './pessoa-view.component.html',
	styleUrls: ['./pessoa-view.component.css']
})
export class PessoaViewComponent {

	pessoa = new Pessoa();
	id: string;

	constructor(
		private pessoaService: PessoaService,
		private router: Router,
		private route: ActivatedRoute,
		private utilService: UtilService) {

		this.route.queryParams.subscribe(params => {
			this.id = params['id'];
			this.buscarPessoa(this.id)
		});
	}

	private buscarPessoa(id: string): void {
		this.pessoaService.getById(id).subscribe(
			_pessoa => this.pessoa = _pessoa,
			_error => this.utilService.aviso('Erro ao buscar o contato')
		);
	}

	navigateEdit(pessoa: Pessoa): void {
		this.router.navigate(['app/pessoa/form'], { queryParams: { mode: 'new', id: pessoa.id } });
	}

	deletar(pessoa: Pessoa): void {
		console.log(pessoa.id);
		this.pessoaService.deleteById(pessoa.id).subscribe(
			_pessoa => {
				this.utilService.aviso('Contato Deletado'!),
				this.router.navigate(['app/contatos'])
			},
			_error => this.utilService.aviso('Erro ao buscar o contato')
		);
	}
}
