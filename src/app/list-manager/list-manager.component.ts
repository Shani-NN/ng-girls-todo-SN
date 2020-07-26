import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">

    <todo-input-button-unit (submit)="addItem($event)">
    </todo-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      <todo-todo-item [item]="todoItem"
                      (remove)="removeItem($event)">
      </todo-todo-item>
    </li>
  </ul>
</div>
    `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }
}
