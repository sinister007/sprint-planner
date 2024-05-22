import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryFormPComponent } from './add-story-form-p.component';

describe('AddStoryFormPComponent', () => {
  let component: AddStoryFormPComponent;
  let fixture: ComponentFixture<AddStoryFormPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStoryFormPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStoryFormPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
