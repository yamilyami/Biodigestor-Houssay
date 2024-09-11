import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaRegistroComponent } from './formula-registro.component';

describe('FormulaRegistroComponent', () => {
  let component: FormulaRegistroComponent;
  let fixture: ComponentFixture<FormulaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
