import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { HostListener } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleService } from '../shared/services/title/title.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-layout',
  standalone: true,
  imports: [ RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule, NgClass ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  title = '';

  constructor(private authenticationService: AuthenticationService,
              private location: Location,
              public titleService: TitleService) {
    this.titleService.title$.subscribe(title => {
      this.title = title;
    });
  }

  logOut(){
    this.clearSession();
    this.authenticationService.logOut();
  }

  back() {
    this.clearSession();
    this.location.back();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.clearSession();
  }

  get path(){
    return this.location.path();
  }

  clearSession() {
    this.titleService.setTitle('');
  }
}
