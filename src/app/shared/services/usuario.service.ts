import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario> {

	constructor(public http: HttpClient,) {
		super(http, "/usuarios");
	}

	getUsuarioByUsername(username): Observable<Usuario> {
		return this.httpGet(`/${username}`);
	}
}