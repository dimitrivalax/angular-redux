import { Injectable, Output, EventEmitter } from "@angular/core";
import { Todo } from "../model/todo.model";

@Injectable()
export class TodoDataService {
  todoEvent = new EventEmitter<Todo[]>();

  todoFilterEvent = new EventEmitter<Todo[]>();

  todos: Todo[] = [];

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  constructor() {}

  // Simulate POST /todos
  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos = [...this.todos, todo];
    this.todoEvent.emit(this.todos);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(id + " : deleted !!!");
    this.todoEvent.emit(this.todos);
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);

    const todosList = this.todos;

    for (let index = 0; index < todosList.length; index++) {
      if (todosList[index].id === todo.id) {
        todosList[index] = todo;
        this.todos = todosList;
        this.todoEvent.emit(this.todos);
        break;
      }
    }

    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos?status=status
  filterTodos(complete: Boolean) {
    this.todoEvent.emit(this.todos.filter(todo => (todo.complete === complete)));
  }

  resetFilter() {
    this.todoEvent.emit(this.todos);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  // Simulate GET /todos
  getTodosLength(): number {
    return this.todos.length;
  }
}
