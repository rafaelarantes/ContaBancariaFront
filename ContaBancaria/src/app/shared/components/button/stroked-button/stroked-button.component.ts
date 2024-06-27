import { Component, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'app-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrl: './stroked-button.component.scss'
})
export class StrokedButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  @Input() text: string = '';

  onClick(){
    this.buttonClick.emit();
  };
}
