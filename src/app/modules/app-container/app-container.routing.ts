import { Routes } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { AuthGuardService } from 'src/app/core/auth/auth-guard.service';
import { PessoaRouting } from '../contato/pessoa.routing';

export const AppContainerRouting: Routes = [
    
    {
        path: 'app',
        component: AppContainerComponent,
        canActivate: [AuthGuardService],
        children: [
            ...PessoaRouting
        ]
    }
];