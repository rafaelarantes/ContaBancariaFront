import { Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { notAuthenticatedGuard } from './authentication/guards/notAuthenticated.guard';
import { authenticatedGuard } from './authentication/guards/authenticated.guard';

import { CentralBankComponent } from './central-bank/components/central-bank/central-bank.component';
import { ListCentralBankComponent } from './central-bank/components/list-central-bank/list-central-bank.component';
import { CreateCentralBankComponent } from './central-bank/components/create-central-bank/create-central-bank.component';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, canActivate: [ authenticatedGuard ], 
        children: [
            { path: '', component: HomeComponent, canActivate: [ authenticatedGuard ]},
            { path: 'central-bank', component: CentralBankComponent, canActivate: [ authenticatedGuard ],
                children: [
                    { path: '', component: ListCentralBankComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'create', component: CreateCentralBankComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'modify/:string', component: CreateCentralBankComponent, canActivate: [ authenticatedGuard ]  }
            ]},
        ]
    },
    { path: '', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: '', redirectTo: '/central-bank', pathMatch: 'full' },
];
