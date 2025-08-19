import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  get todos(): ITodo[] {
    return this.todoService.todos();
  }
}
