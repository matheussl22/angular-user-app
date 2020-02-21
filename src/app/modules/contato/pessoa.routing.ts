import { Routes } from '@angular/router';

import { PessoasComponent } from './contatos/pessoas.component';
import { PessoaViewComponent } from './contato-view/pessoa-view.component';
import { PessoaFormComponent } from './contato-form/pessoa-form.component';

export const PessoaRouting: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pessoas'
    },
    {
        path: 'pessoas',
        component: PessoasComponent
    },
    {
        path: 'pessoa/view',
        component: PessoaViewComponent,
    },
    {
        path: 'pessoa/form',
        component: PessoaFormComponent,
    },
 ];