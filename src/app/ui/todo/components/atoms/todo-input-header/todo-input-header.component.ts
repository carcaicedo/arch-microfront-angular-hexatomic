import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-input-header',
  standalone: false,
  templateUrl: './todo-input-header.component.html',
  styleUrls: ['./todo-input-header.component.scss']
})
export class TodoInputHeaderComponent implements OnInit {
  public title: string = '';

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.title.trim()) {
      this.todoService.addTodo({
        title: this.title,
        completed: false,
        id: Date.now()
      });
      this.title = '';
    }
  }

}
