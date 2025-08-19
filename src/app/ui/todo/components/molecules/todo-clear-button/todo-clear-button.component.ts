import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-clear-button',
  standalone: false,
  templateUrl: './todo-clear-button.component.html',
  styleUrls: ['./todo-clear-button.component.scss']
})
export class TodoClearButtonComponent implements OnInit {

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  public clearCompleted() {
    this.todoService.clearCompleted();
  }

  public get hasCompletedTodos(): boolean {
    return this.todoService.getCountCompletedTodos() > 0;
  }

}
