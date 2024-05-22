import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintPlannerRoutingModule } from './sprint-planner-routing.module';
import { SprintPlannerCComponent } from './container/sprint-planner-c.component';
import { AddStoryFormPComponent } from './presentation/add-story-form-p/add-story-form-p.component';
import { StoryListPComponent } from './presentation/story-list-p/story-list-p.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprintCalculatorPComponent } from './presentation/sprint-calculator-p/sprint-calculator-p.component';
import { SelectedSprintPComponent } from './presentation/selected-sprint-p/selected-sprint-p.component';


@NgModule({
  declarations: [
    SprintPlannerCComponent,
    AddStoryFormPComponent,
    StoryListPComponent,
    SprintCalculatorPComponent,
    SelectedSprintPComponent
  ],
  imports: [
    CommonModule,
    SprintPlannerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SprintPlannerModule { }
