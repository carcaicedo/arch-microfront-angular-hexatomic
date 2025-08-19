import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../../../../core/models/todo.model';
import { TodoService } from '../../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-checkbox',
  standalone: false,
  templateUrl: './todo-checkbox.component.html',
  styleUrls: ['./todo-checkbox.component.scss']
})
export class TodoCheckboxComponent implements OnInit {
  @Input() todo: ITodo = { id: 0, title: '', completed: false };

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id);
  }

}
