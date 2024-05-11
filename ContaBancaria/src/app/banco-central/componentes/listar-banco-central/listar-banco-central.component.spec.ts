import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBancoCentralComponent } from './listar-banco-central.component';

describe('ListarBancoCentralComponent', () => {
  let component: ListarBancoCentralComponent;
  let fixture: ComponentFixture<ListarBancoCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarBancoCentralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarBancoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
