import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarContaComponent } from './depositar-conta.component';

describe('DepositarContaComponent', () => {
  let component: DepositarContaComponent;
  let fixture: ComponentFixture<DepositarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
