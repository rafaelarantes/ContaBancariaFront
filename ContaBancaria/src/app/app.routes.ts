import { Routes } from '@angular/router';

import { LoginComponent } from './autenticacao/components/login/login.component';
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
import { naoAutenticadoGuard } from './autenticacao/guards/nao-autenticado.guard';
import { autenticadoGuard } from './autenticacao/guards/autenticado.guard';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, canActivate: [ autenticadoGuard ], 
        children: [
            { path: '', component: HomeComponent, canActivate: [ autenticadoGuard ]},
            { path: 'banco-central', component: BancoCentralComponent, canActivate: [ autenticadoGuard ],
                children: [
                    { path: '', component: ListarBancoCentralComponent, canActivate: [ autenticadoGuard ] },
                    { path: 'criar', component: CriarBancoCentralComponent, canActivate: [ autenticadoGuard ] },
                    { path: 'alterar/:string', component: CriarBancoCentralComponent, canActivate: [ autenticadoGuard ]  }
            ]},
            { path: 'banco', component: ListarBancoComponent, canActivate: [ autenticadoGuard ],
                children: [
                { path: 'criar', component: CriarBancoComponent, canActivate: [ autenticadoGuard ] },
                { path: 'alterar/:string', component: CriarBancoComponent, canActivate: [ autenticadoGuard ] },
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
    { path: '', redirectTo: '/banco-central', pathMatch: 'full' },
];
