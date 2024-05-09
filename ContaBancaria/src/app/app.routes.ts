import { Routes } from '@angular/router';

import { LoginComponent } from './autenticacao/components/login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { naoAutenticadoGuard } from './autenticacao/nao-autenticado.guard';
import { autenticadoGuard } from './autenticacao/autenticado.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [naoAutenticadoGuard] },
    { path: '', component: DefaultLayoutComponent, canActivate: [ autenticadoGuard ], 
        children: [
            { path: '', component: HomeComponent }
        ]
    }
];
