import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario = new Usuario();

	constructor(private authService: AuthService,
		private router: Router,
		private utilService: UtilService) { }

	ngOnInit() {
	}

	onSubmitForm() {
		this.authService.doLogin(this.usuario).subscribe(
			_user => this.router.navigate(['/app/pessoas']),
			_error => this.utilService.aviso('Senha ou email inválido')
		)
	}
}
