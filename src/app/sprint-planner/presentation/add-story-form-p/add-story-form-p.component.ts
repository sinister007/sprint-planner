import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-story-form-p',
  templateUrl: './add-story-form-p.component.html',
  styleUrls: ['./add-story-form-p.component.scss']
})
export class AddStoryFormPComponent implements OnInit {

  /**
   * output event
   */
  @Output() objPresentationEvent = new EventEmitter<any>()

  /**
   * add story form
   */
  objAddStoryForm = this.objFormBuilder.group({
    strStory: ['',Validators.required],
    intPoint: ['',Validators.required]
  })

  /**
   * array of sprint data
   */
  arrSprintData: Array < any > = []

  constructor(private objFormBuilder: FormBuilder) {}

  ngOnInit(): void {}

  /**
   * add story function
   */
  addStory() {
    if(this.objAddStoryForm.status === "INVALID"){
      window.alert('both story and points is required')
    }else{
      const newStory = this.objAddStoryForm.value;
      // Check if strStory already exists in arrSprintData
      const storyExists = this.arrSprintData.some(story => story.strStory === newStory.strStory);
      if (!storyExists) {
        this.arrSprintData.push(newStory);
        this.objAddStoryForm.reset()
        console.log(this.arrSprintData);
        this.objPresentationEvent.emit({
          strOperation:"STORY_ADDED",
          objElement:this.arrSprintData
        })
      } else {
        window.alert(`Story with name: ${newStory.strStory} already exists.`);
      }
    }

  }


}
