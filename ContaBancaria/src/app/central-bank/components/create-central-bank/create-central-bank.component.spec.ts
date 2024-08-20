import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCentralBankComponent } from './create-central-bank.component';

describe('CreateCentralBankComponent', () => {
  let component: CreateCentralBankComponent;
  let fixture: ComponentFixture<CreateCentralBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCentralBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCentralBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
