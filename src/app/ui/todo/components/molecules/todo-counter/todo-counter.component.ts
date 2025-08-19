import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-counter',
  standalone: false,
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.scss']
})
export class TodoCounterComponent implements OnInit {

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  get activeTodos(): ITodo[] {
    return this.todoService.getActiveTodos();
  }
}
