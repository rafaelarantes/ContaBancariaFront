import { Component } from '@angular/core';
import { inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AutenticacaoService } from '../../../autenticacao/services/autenticacao.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export abstract class BaseComponent {
  private snackBar: MatSnackBar;
  protected autenticacaoService: AutenticacaoService;

  constructor() {
    this.snackBar = inject(MatSnackBar);
    this.autenticacaoService = inject(AutenticacaoService);
  }

  processReturn(promise: Promise<any>, then: (data: any) => void = ({}) => {},
                catchError: (error: any) => void = ({}) => {}, message: string = 'Erro interno.'){
    promise.then((data) => {
                if(!data.resultado){
                  this.snackBar.open('Ocorreu um erro', data['mensagens'].join(', '), {
                    duration: 3000
                  });
                }

                then(data);
              })
            .catch((error) => {
              this.snackBar.open('Ocorreu um erro', message, {
                duration: 3000
              });

              if(error.status === 401){
                this.autenticacaoService.deslogar();
                window.location.reload();
              }

              catchError(error);
            });
  }
} 
