import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { ITodo } from '../../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-input-item',
  templateUrl: './todo-input-item.component.html',
  standalone: false,
  styleUrls: ['./todo-input-item.component.scss']
})
export class TodoInputItemComponent implements OnInit, AfterViewChecked {
  @Input() todo: ITodo = { id: 0, title: '', completed: false };
  @ViewChild('todoInputRef') inputRef?: ElementRef;
  @Output() isEditing: EventEmitter<void> = new EventEmitter();

  public title: string = '';

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }

  handleBlur() {
    this.isEditing.emit();
  }

  updateTodo() {
    if (this.title.trim() === '') {
      this.todoService.deleteTodo(this.todo.id);
    } else {
      this.todoService.updateTodo(this.todo.id, this.title);
    }
    this.isEditing.emit();
  }

  handleFocus() {
    this.title = this.todo.title;
  }
}
