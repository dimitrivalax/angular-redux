import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../model/todo.model';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  implements OnInit {

  todos: Todo[] = [];

  subscription: any;

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.subscription = this.todoDataService.todoEvent
      .subscribe(todos => this.todos = todos);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
}
