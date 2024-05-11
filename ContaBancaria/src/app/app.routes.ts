import { Routes } from '@angular/router';

import { LoginComponent } from './autenticacao/components/login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { ListarBancoCentralComponent } from './banco-central/componentes/listar-banco-central/listar-banco-central.component';
import { CriarBancoCentralComponent} from './banco-central/componentes/criar-banco-central/criar-banco-central.component';
import { ListarBancoComponent } from './banco/componentes/listar-banco/listar-banco.component';
import { CriarBancoComponent } from './banco/componentes/criar-banco/criar-banco.component';
import { HomeContaComponent } from './conta/componentes/home-conta/home-conta.component';
import { DepositarContaComponent } from './conta/componentes/depositar-conta/depositar-conta.component';
import { SacarContaComponent } from './conta/componentes/sacar-conta/sacar-conta.component';
import { TransferirContaComponent } from './conta/componentes/transferir-conta/transferir-conta.component'
import { naoAutenticadoGuard } from './autenticacao/nao-autenticado.guard';
import { autenticadoGuard } from './autenticacao/autenticado.guard';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, canActivate: [ autenticadoGuard ], 
        children: [
            { path: '', component: HomeComponent, canActivate: [ autenticadoGuard ]},
            { path: 'banco-central', component: ListarBancoCentralComponent, canActivate: [ autenticadoGuard ],
                children: [
                    { path: 'criar', component: CriarBancoCentralComponent, canActivate: [ autenticadoGuard ] }
            ]},
            { path: 'banco', component: ListarBancoComponent, canActivate: [ autenticadoGuard ],
                children: [
                { path: 'criar', component: CriarBancoComponent, canActivate: [ autenticadoGuard ] }
            ]},
            { path: 'conta', component: HomeContaComponent, canActivate: [ autenticadoGuard ],
                children: [
                { path: 'depositar', component: DepositarContaComponent, canActivate: [ autenticadoGuard ] },
                { path: 'sacar', component: SacarContaComponent, canActivate: [ autenticadoGuard ] },
                { path: 'transferir', component: TransferirContaComponent, canActivate: [ autenticadoGuard ] }
            ]}
        ]
    },
    { path: '', component: LoginComponent, canActivate: [naoAutenticadoGuard] },
    { path: 'login', component: LoginComponent, canActivate: [naoAutenticadoGuard] },
];
