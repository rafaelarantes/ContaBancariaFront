import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBancoCentralComponent } from './criar-banco-central.component';

describe('CriarBancoCentralComponent', () => {
  let component: CriarBancoCentralComponent;
  let fixture: ComponentFixture<CriarBancoCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarBancoCentralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarBancoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
