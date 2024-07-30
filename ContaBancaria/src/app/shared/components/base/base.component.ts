import { Component } from '@angular/core';
import { inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AutenticacaoService } from '../../../autenticacao/services/autenticacao.service';
import { TranslationService } from '../../services/translation/translation.service';
import { TranslationKeys } from '../../services/translation/translation-keys.enum';

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
  protected translationService: TranslationService;

  constructor() {
    this.snackBar = inject(MatSnackBar);
    this.autenticacaoService = inject(AutenticacaoService);
    this.translationService = inject(TranslationService);
  }

  processReturn(promise: Promise<any>, 
                columnDescriptionName: string = '',
                then: (data: any) => void = ({}) => {},
                catchError: (error: any) => void = ({}) => {}, 
                message: string = 'Erro interno.'){
    promise.then((data) => {
                if(!data.resultado){
                  this.snackBar.open('Ocorreu um erro', data['mensagens'].join(', '), {
                    duration: 3000
                  });
                }
                
                if(columnDescriptionName) {
                  data.data.map((d: { [x: string]: any; description: any; }) => {
                    d.description = d[columnDescriptionName];
                    delete d[columnDescriptionName];
                  });
                }

                then(data);
              })
            .catch((error) => {
              this.snackBar.open('Ocorreu um erro' + error.message, message, {
                duration: 3000
              });

              if(error.status === 401){
                this.autenticacaoService.deslogar();
                window.location.reload();
              }

              catchError(error);
            });
  }

  getTranslatedText(key: TranslationKeys): string {
    return this.translationService.getTranslation(key);
  }
} 

