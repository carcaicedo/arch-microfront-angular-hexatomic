import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-text',
  templateUrl: './todo-text.component.html',
  standalone: false,
  styleUrls: ['./todo-text.component.scss']
})
export class TodoTextComponent implements OnInit {
  @Input() todo: ITodo = { id: 0, title: '', completed: false };

  @Output() setEditing: EventEmitter<void>
    = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  startEdit() {
    this.setEditing.emit();
  }
}
