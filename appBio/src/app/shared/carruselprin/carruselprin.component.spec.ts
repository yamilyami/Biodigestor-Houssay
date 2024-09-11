import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselprinComponent } from './carruselprin.component';

describe('CarruselprinComponent', () => {
  let component: CarruselprinComponent;
  let fixture: ComponentFixture<CarruselprinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselprinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
