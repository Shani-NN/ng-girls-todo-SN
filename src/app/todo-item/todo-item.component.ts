import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'todo-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
</div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
