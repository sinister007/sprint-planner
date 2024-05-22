import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSprintPComponent } from './selected-sprint-p.component';

describe('SelectedSprintPComponent', () => {
  let component: SelectedSprintPComponent;
  let fixture: ComponentFixture<SelectedSprintPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSprintPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSprintPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
