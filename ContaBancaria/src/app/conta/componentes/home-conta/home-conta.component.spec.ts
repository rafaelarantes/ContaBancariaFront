import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContaComponent } from './home-conta.component';

describe('HomeContaComponent', () => {
  let component: HomeContaComponent;
  let fixture: ComponentFixture<HomeContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
