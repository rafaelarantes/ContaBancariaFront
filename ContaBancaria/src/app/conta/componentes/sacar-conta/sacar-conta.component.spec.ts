import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarContaComponent } from './sacar-conta.component';

describe('SacarContaComponent', () => {
  let component: SacarContaComponent;
  let fixture: ComponentFixture<SacarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SacarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
