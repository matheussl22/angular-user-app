import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }).append('Authorization','Basic ZXN0cnV0dXJhOmVzdHJ1dHVyYXNlY3JldA=='), observe: 'response' };

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	jwtHelper: JwtHelper = new JwtHelper();
    private HOST_API = environment.hostApi;

	constructor(public http: HttpClient,
		private router: Router,
		private utilService: UtilService,
        private usuarioService: UsuarioService) {
    }

	loggedIn() {
		if (localStorage.getItem('TOKEN')) {
			return true;
		} 
		return false;
	}

	logout() {
		localStorage.clear();
		this.navigateToLogin();
	}

	doLogin(usuario: Usuario): Observable<any> {
		return new Observable(observer => {
            this.getToken(usuario).subscribe(
                success => {
                    this.getUsuarioByUsername(usuario.username).subscribe(
                        usuario => {
                            this.setUsuario(usuario);
                            observer.next(usuario);
                        }
                    )
                },
                error => observer.error(error)
            )
        });
	}

	getUsuarioByUsername(username: string): Observable<Usuario> {
        return this.usuarioService.getUsuarioByUsername(username);
    }

	getToken(usuario: Usuario) {
		console.log(usuario);
		
        return this.http.post<any>(`${this.HOST_API}/oauth/token`, this.getBody(usuario), httpOptions as any).pipe(
            map(response => {
				console.log(response['body']);
				
                let token = response['body']['access_token'];
                this.setToken(token);
            })
        );
	}
	
	getBody(usuario: Usuario) {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('username', usuario.username);
        urlSearchParams.append('password', usuario.password);
        return urlSearchParams.toString();
    }

	private setToken(token: string): void {
		localStorage.setItem('TOKEN', token);
	}

	private setUsuario(usuario: Usuario): void {
		localStorage.setItem('USER', JSON.stringify(usuario));
	}

	private navigateToLogin(): void {
		this.router.navigate(['/login']);
	}
}
