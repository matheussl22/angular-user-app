import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
    providedIn: 'root'
})
export class PessoaService extends AbstractService<Pessoa> {

    constructor(public http: HttpClient,) {
        super(http, "/pessoas");
    }

}