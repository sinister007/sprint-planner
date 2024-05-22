import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListPComponent } from './story-list-p.component';

describe('StoryListPComponent', () => {
  let component: StoryListPComponent;
  let fixture: ComponentFixture<StoryListPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryListPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryListPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
