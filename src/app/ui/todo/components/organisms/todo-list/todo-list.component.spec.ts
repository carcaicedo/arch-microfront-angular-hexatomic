/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  const todoServiceMock = {
    todosFiltered: jest.fn(() => [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true }
    ]),
    toggleAll: jest.fn()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            getTodos: jest.fn(() => []),
            addTodo: jest.fn(),
            removeTodo: jest.fn(),
            toggleTodo: jest.fn(),
            todosFiltered: jest.fn(() => []),
            toggleAll: jest.fn(),
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    todoService = TestBed.inject(TodoService);
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return filtered todos from TodoService', () => {
    expect(component.todos).toEqual([]);
    expect(todoService.todosFiltered).toHaveBeenCalled();
  });

  it('should call toggleAll method of TodoService when toggleAll is called', () => {
    component.toggleAll();
    expect(todoService.toggleAll).toHaveBeenCalled();
  });
});
