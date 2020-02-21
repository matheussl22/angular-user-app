import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
	selector: 'app-pessoas',
	templateUrl: './pessoas.component.html',
	styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

	pessoas: Pessoa[] = [];

	constructor(
		private router: Router,
		private utilService: UtilService,
		private pessoaService: PessoaService) { }

	ngOnInit() {
		this.loadPessoas();
	}

	loadPessoas(): any {
		this.pessoaService.getAll('').subscribe(
				pessoas => this.pessoas = pessoas['content'] ? pessoas['content'] : [],
				error => this.utilService.aviso('Erro ao carregar contatos'));
	}	

	cadastrarPessoa(): void {
		this.router.navigate(['app/pessoa/form'], { queryParams: { mode: 'new' } });
	}

	navigatePessoaView(pessoa: Pessoa): void {
		this.router.navigate(['app/pessoa/view'], { queryParams: { id: pessoa.id } });
	}
}
