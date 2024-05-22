import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-sprint-p',
  templateUrl: './selected-sprint-p.component.html',
  styleUrls: ['./selected-sprint-p.component.scss']
})
export class SelectedSprintPComponent implements OnInit {
  /**
   * selected sprint array
   */
  @Input()arrSprintSelected:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
