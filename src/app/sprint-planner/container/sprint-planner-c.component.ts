import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-planner-c',
  templateUrl: './sprint-planner-c.component.html',
  styleUrls: ['./sprint-planner-c.component.scss']
})
export class SprintPlannerCComponent implements OnInit {
  /**
   * array of list to show in planner
   */
  arrListStories:Array<any> = []
  /**
   * array of selected sprint
   */
  arrSprintSelected:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * event from add story form p
   */
  eventFromAddStoryFormP(objEvent:any){
    switch (objEvent.strOperation) {
      case "STORY_ADDED":
        this.arrListStories = objEvent.objElement
        console.log(this.arrListStories,"ssssssssssssss");
        
        break;
    
      default:
        break;
    }
  }
    /**
   * event from sprint calulator p
   */
    eventFromCalculatorP(objEvent:any){
      switch (objEvent.strOperation) {
        case "CREATE_SPRINT":
          this.arrSprintSelected = objEvent.objElement
          console.log(this.arrSprintSelected,"ssssssssssssss");
          
          break;
        case "CLEAR_STORIES" :
          this.arrListStories.length = 0
          break;
        case "CLEAR_SPRINT":
          this.arrSprintSelected.length = 0
          break;
        default:
          break;
      }
    }

}
