import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFiltersComponent } from './todo-filters.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoFiltersComponent', () => {
  let component: TodoFiltersComponent;
  let fixture: ComponentFixture<TodoFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFiltersComponent,],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial filters', () => {
    const expectedFilters = [
      { text: 'Todos', filter: 'all', isSelected: true },
      { text: 'Activos', filter: 'active', isSelected: false },
      { text: 'Completados', filter: 'completed', isSelected: false },
    ];
    expect(component.filters).toEqual(expectedFilters);
  });

  it('should have "Todos" filter selected by default', () => {
    const selectedFilter = component.filters.find(filter => filter.isSelected);
    expect(selectedFilter?.text).toBe('Todos');
  });
});
