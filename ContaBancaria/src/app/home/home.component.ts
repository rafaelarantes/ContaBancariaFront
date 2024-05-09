import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, SharedModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  titulo = "Acesse";
}
