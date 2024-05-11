import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBancoComponent } from './criar-banco.component';

describe('CriarBancoComponent', () => {
  let component: CriarBancoComponent;
  let fixture: ComponentFixture<CriarBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarBancoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
