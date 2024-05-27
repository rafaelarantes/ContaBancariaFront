import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-banco-central',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './banco-central.component.html',
  styleUrl: './banco-central.component.scss'
})
export class BancoCentralComponent extends BaseComponent {

}
