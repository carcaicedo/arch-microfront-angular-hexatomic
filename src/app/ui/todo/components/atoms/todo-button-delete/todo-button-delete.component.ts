import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../../../../core/models/todo.model';
import { TodoService } from '../../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-button-delete',
  standalone: false,
  templateUrl: './todo-button-delete.component.html',
  styleUrls: ['./todo-button-delete.component.scss']
})
export class TodoButtonDeleteComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }

}
