import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentralBankComponent } from './list-central-bank.component';

describe('ListCentralBankComponent', () => {
  let component: ListCentralBankComponent;
  let fixture: ComponentFixture<ListCentralBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCentralBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCentralBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
