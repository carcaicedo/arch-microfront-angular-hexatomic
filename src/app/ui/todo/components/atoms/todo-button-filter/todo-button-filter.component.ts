import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-button-filter',
  templateUrl: './todo-button-filter.component.html',
  standalone: false,
  styleUrls: ['./todo-button-filter.component.scss']
})
export class TodoButtonFilterComponent implements OnInit {
  @Input() filter: 'all' | 'active' | 'completed' = 'all';
  @Input() isSelected: boolean = false;
  @Input() text: string = '';

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit() {
  }

  public onClickFilter() {
    if (!this.filter) {
      return;
    }
    this.todoService.setCurrentFilter(this.filter);
  }

}
