import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintPlannerCComponent } from './container/sprint-planner-c.component';

const routes: Routes = [
  {path:"",component:SprintPlannerCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintPlannerRoutingModule { }
