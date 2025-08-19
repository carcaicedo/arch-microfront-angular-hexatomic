import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  get todos(): ITodo[] {
    return this.todoService.todosFiltered();
  }

  get activeTodos(): ITodo[] {
    return [];
  }

  toggleAll() {
    this.todoService.toggleAll();
  }

}
