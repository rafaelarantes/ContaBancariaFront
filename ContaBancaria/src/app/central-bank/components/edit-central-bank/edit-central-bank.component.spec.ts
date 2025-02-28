import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCentralBankComponent } from './edit-central-bank.component';

describe('EditCentralBankComponent', () => {
  let component: EditCentralBankComponent;
  let fixture: ComponentFixture<EditCentralBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCentralBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCentralBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
