import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppContainerComponent } from './app-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PessoaModule } from '../contato/pessoa.module';

@NgModule({
    declarations: [
        AppContainerComponent,
        ToolbarComponent,
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        CommonModule,
        RouterModule,
        PessoaModule
    ],
    providers: [],
  })
  export class AppContainerModule { }
  