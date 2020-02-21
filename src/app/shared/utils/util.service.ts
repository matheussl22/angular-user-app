import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(private snackBar: MatSnackBar) { }


    aviso(mensagem: string) {
        const config = new MatSnackBarConfig();
        config.duration = 2500;
        return this.snackBar.open(mensagem, 'OK', config);
    }
}