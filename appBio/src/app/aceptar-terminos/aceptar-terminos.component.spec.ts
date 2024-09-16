import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarTerminosComponent } from './aceptar-terminos.component';

describe('AceptarTerminosComponent', () => {
  let component: AceptarTerminosComponent;
  let fixture: ComponentFixture<AceptarTerminosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptarTerminosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarTerminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
