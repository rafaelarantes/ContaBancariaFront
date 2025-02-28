import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBankInputComponent } from './number-bank-input.component';

describe('NumberBankInputComponent', () => {
  let component: NumberBankInputComponent;
  let fixture: ComponentFixture<NumberBankInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberBankInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberBankInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
