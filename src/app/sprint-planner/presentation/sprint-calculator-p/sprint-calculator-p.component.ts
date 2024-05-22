import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-sprint-calculator-p',
  templateUrl: './sprint-calculator-p.component.html',
  styleUrls: ['./sprint-calculator-p.component.scss']
})
export class SprintCalculatorPComponent implements OnInit {
  
  /**
   * output event
   */
  @Output() objPresentationEvent = new EventEmitter<any>()

  /**
   * array of filtered list of stories to patch into sprint
   */
  arrFilteredStories:Array<any> = []

  /**
   * form of sprint
   */
  objSprintForm = this.objFormBuilder.group({
    intSprintPoint: ['', Validators.required]
  })

  /**
   * data from container i.e of list of stories
   */
  @Input() arrListStories: Array < any > = []

  constructor(private objFormBuilder: FormBuilder) {}

  ngOnInit(): void {

  }


  /**
   * auto select stories with points
   */
  autoSelectStories() {
    const value = this.objSprintForm.value.intSprintPoint
    if (value == null) {
      return;
    }
    if (this.objSprintForm.status === 'INVALID') {
      window.alert('sprint points is required')
    }else if(!this.arrListStories.length){
      window.alert('No stories found!!')
    }else{
      let totalPoints = 0
      this.arrFilteredStories = []
      /**
       * to assign smaller values first into the array
       */
      const arrSortedListStories = this.arrListStories.sort((a, b) => a.intPoint - b.intPoint);
      
      arrSortedListStories.forEach(element => {
        if(totalPoints + element.intPoint <= value){
          this.arrFilteredStories.push(element);
          totalPoints += element.intPoint;
        }
      });

      console.log(this.arrFilteredStories);
      this.objPresentationEvent.emit({
        strOperation:"CREATE_SPRINT",
        objElement:this.arrFilteredStories
      })
      

    }
  }
  /**
   * clear stories
   */
  clearStories(){
    this.objPresentationEvent.emit({
      strOperation:"CLEAR_STORIES",
      objElement:''
    })
  }
  /**
   * clear sprints
   */
  clearSprint(){
    this.objPresentationEvent.emit({
      strOperation:"CLEAR_SPRINT",
      objElement:''
    })
  }
}
