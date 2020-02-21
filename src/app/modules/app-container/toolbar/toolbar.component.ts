import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();
	titulo: string = 'Edu';
	showBackButton = false;

	constructor(
		private usuarioService: UsuarioService,
		private authService: AuthService,
		private router: Router) {

			this.subscribeRouteChanges();
	}

	ngOnInit() {
	}

	doLogout(): void {
		this.authService.logout();
	}

	menuClicked(): void {
		this.menuToggle.emit();
	}

	abrirConfiguracoes(): void {
		this.router.navigate(['app/configuracoes']);
	}


	private subscribeRouteChanges(): void {
		this.router.events.subscribe((rota) => {
			if (rota instanceof NavigationEnd) {
				this.setConfigToolbar(rota);
			}
		});
	}

	setConfigToolbar(rota: NavigationStart) {
		const rotaContatos = '/app/contatos';

		if(rota.url === rotaContatos) {
			this.showBackButton = false;
			return 
		}
		this.showBackButton = true;
	}

	navigationBack(): void {
		window.history.back();
	}
}
