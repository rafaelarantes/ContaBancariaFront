import { Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { notAuthenticatedGuard } from './authentication/guards/notAuthenticated.guard';
import { authenticatedGuard } from './authentication/guards/authenticated.guard';

import { CentralBankComponent } from './central-bank/components/central-bank/central-bank.component';
import { ListCentralBankComponent } from './central-bank/components/list-central-bank/list-central-bank.component';
import { NewCentralBankComponent } from './central-bank/components/new-central-bank/new-central-bank.component';
import { EditCentralBankComponent} from './central-bank/components/edit-central-bank/edit-central-bank.component';

export const routes: Routes = [
    { path: '', component: DefaultLayoutComponent, canActivate: [ authenticatedGuard ], 
        children: [
            { path: '', component: HomeComponent, canActivate: [ authenticatedGuard ]},
            { path: 'central-bank', component: CentralBankComponent, canActivate: [ authenticatedGuard ],
                children: [
                    { path: '', component: ListCentralBankComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'new', component: NewCentralBankComponent, canActivate: [ authenticatedGuard ] },
                    { path: 'edit/:string', component: EditCentralBankComponent, canActivate: [ authenticatedGuard ]  }
            ]},
        ]
    },
    { path: '', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [notAuthenticatedGuard] },
    { path: '', redirectTo: '/central-bank', pathMatch: 'full' },
];
