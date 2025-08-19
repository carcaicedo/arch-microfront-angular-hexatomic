import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo = { id: 0, title: '', completed: false };
  public isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  startEdit() {
    this.isEditing = true;
  }

  handleBlur() {
    this.isEditing = false;
  }

}
