import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCentralComponent } from './banco-central.component';

describe('BancoCentralComponent', () => {
  let component: BancoCentralComponent;
  let fixture: ComponentFixture<BancoCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoCentralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BancoCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
