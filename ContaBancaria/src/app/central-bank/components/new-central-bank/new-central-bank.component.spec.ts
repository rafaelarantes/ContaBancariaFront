import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCentralBankComponent } from './new-central-bank.component';

describe('NewCentralBankComponent', () => {
  let component: NewCentralBankComponent;
  let fixture: ComponentFixture<NewCentralBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCentralBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCentralBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
