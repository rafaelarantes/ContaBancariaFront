import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { IUser } from '../../interfaces/iuser';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { CardModule } from '../../../shared/components/card/card.module';
import { InputModule } from '../../../shared/components/input/input.module'
import { ButtonModule } from '../../../shared/components/button/button.module';
import { TranslationKeys } from '../../../shared/services/translation/translation-keys.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, CardModule, InputModule, ButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent {
  loginSignIn = '';
  formLogin: FormGroup;
  titleCard = 'Login';

  constructor(private formBuilder: FormBuilder){
    super();
    this.loginSignIn = this.getTranslatedText(TranslationKeys.AUTHENTICATION_LOGIN_SIGN_IN)
    
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(){
      if(this.formLogin.valid) {
        var user = this.formLogin.getRawValue() as IUser;
        let retorno = this.authenticationService.login(user);
  
        this.processReturn(retorno);
      }
    }
  }
