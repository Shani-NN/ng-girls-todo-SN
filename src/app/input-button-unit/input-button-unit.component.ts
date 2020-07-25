import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  template: `


    <input #inputElementRef
    [value]="title"
    (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
   }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  }
