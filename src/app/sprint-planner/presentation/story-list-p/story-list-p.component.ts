import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-story-list-p',
  templateUrl: './story-list-p.component.html',
  styleUrls: ['./story-list-p.component.scss']
})
export class StoryListPComponent implements OnInit,OnChanges {


  /**
   * data from container i.e of list of stories
   */
  @Input() arrListStories:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.arrListStories);
      
  }

}
