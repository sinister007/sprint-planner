import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintCalculatorPComponent } from './sprint-calculator-p.component';

describe('SprintCalculatorPComponent', () => {
  let component: SprintCalculatorPComponent;
  let fixture: ComponentFixture<SprintCalculatorPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintCalculatorPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintCalculatorPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
