import { Component, OnInit } from '@angular/core';
import { ITodoFilters } from '../../../../../core/models/filters-todo';

@Component({
  selector: 'app-todo-filters',
  standalone: false,
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  public filters: ITodoFilters[] = [];

  constructor() { }

  ngOnInit() {
    this.initFilters();
  }

  private initFilters() {
    this.filters = [
      { text: 'Todos', filter: 'all', isSelected: true },
      { text: 'Activos', filter: 'active', isSelected: false },
      { text: 'Completados', filter: 'completed', isSelected: false }
    ];
  }

}
