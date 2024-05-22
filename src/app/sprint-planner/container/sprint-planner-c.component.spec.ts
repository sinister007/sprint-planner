import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPlannerCComponent } from './sprint-planner-c.component';

describe('SprintPlannerCComponent', () => {
  let component: SprintPlannerCComponent;
  let fixture: ComponentFixture<SprintPlannerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintPlannerCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintPlannerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
