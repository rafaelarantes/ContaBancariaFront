import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirContaComponent } from './transferir-conta.component';

describe('TransferirContaComponent', () => {
  let component: TransferirContaComponent;
  let fixture: ComponentFixture<TransferirContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferirContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferirContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
