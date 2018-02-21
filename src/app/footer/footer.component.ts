import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoDataService } from '../service/todo-data.service';
import { TodoFilter } from '../model/todo-filter.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  
})
export class FooterComponent implements OnInit {

  todos: Todo[] = [];

  index = 0;

  subscription: any;

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.subscription = this.todoDataService.todoEvent
    .subscribe(todos => this.todos = todos);
  }

  countCompleteTodo() {
    return this.todos.filter((todo) => todo.complete).length;
  }


  countTodo() {
    return this.todos.length;
  }

  filter(complete) {
    this.todoDataService.filterTodos(complete);
  }

  resetFilter() {
    this.todoDataService.resetFilter();
  }

}
