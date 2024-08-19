import { Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { BancoCentralComponent }  from './banco-central/components/banco-central/banco-central.component';
import { ListarBancoCentralComponent } from './banco-central/components/listar-banco-central/listar-banco-central.component';
import { CriarBancoCentralComponent} from './banco-central/components/criar-banco-central/criar-banco-central.component';
import { ListarBancoComponent } from './banco/components/listar-banco/listar-banco.component';
import { CriarBancoComponent } from './banco/components/criar-banco/criar-banco.component';
import { HomeContaComponent } from './conta/componentes/home-conta/home-conta.component';
import { DepositarContaComponent } from './conta/componentes/depositar-conta/depositar-conta.component';
import { SacarContaComponent } from './conta/componentes/sacar-conta/sacar-conta.component';
import { TransferirContaComponent } from './conta/componentes/transferir-conta/transferir-conta.component'
import { notAuthenticatedGuard } from './authentication/guards/notAuthenticated.guard';
import { authenticatedGuard } from './authentication/guards/authenticated.guard';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, canActivate: [ authenticatedGuard ], 
        children: [
            { path: '', component: HomeComponent, canActivate: [ authenticatedGuard ]},
            { path: 'banco-central', component: BancoCentralComponent, canActivate: [ authenticatedGuard ],
                children: [
                    { path: '', component: ListarBancoCentralComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'criar', component: CriarBancoCentralComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'alterar/:string', component: CriarBancoCentralComponent, canActivate: [ authenticatedGuard ]  }
            ]},
            { path: 'banco', component: ListarBancoComponent, canActivate: [ authenticatedGuard ],
                children: [
                { path: 'criar', component: CriarBancoComponent, canActivate: [ authenticatedGuard ] },
                { path: 'alterar/:string', component: CriarBancoComponent, canActivate: [ authenticatedGuard ] },
            ]},
            { path: 'conta', component: HomeContaComponent, canActivate: [ authenticatedGuard ],
                children: [
                { path: 'depositar', component: DepositarContaComponent, canActivate: [ authenticatedGuard ] },
                { path: 'sacar', component: SacarContaComponent, canActivate: [ authenticatedGuard ] },
                { path: 'transferir', component: TransferirContaComponent, canActivate: [ authenticatedGuard ] }
            ]}
        ]
    },
    { path: '', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: '', redirectTo: '/banco-central', pathMatch: 'full' },
];
