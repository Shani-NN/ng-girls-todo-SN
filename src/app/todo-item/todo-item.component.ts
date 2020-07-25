import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
