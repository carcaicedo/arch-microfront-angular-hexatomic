/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoClearButtonComponent } from './todo-clear-button.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoClearButtonComponent', () => {
  let component: TodoClearButtonComponent;
  let fixture: ComponentFixture<TodoClearButtonComponent>;
  let todoService: TodoService;

  const todoServiceMock = {
    clearCompleted: jest.fn(),
    getCountCompletedTodos: jest.fn(() => 0)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoClearButtonComponent],
      providers: [
        {
          provide: TodoService,
          useValue: todoServiceMock
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
    fixture = TestBed.createComponent(TodoClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearCompleted method of TodoService when clearCompleted is called', () => {
    component.clearCompleted();
    expect(todoService.clearCompleted).toHaveBeenCalled();
  });

  it('should return true for hasCompletedTodos if there are completed todos', () => {
    todoServiceMock.getCountCompletedTodos.mockReturnValue(1);
    expect(component.hasCompletedTodos).toBe(true);
  });

  it('should return false for hasCompletedTodos if there are no completed todos', () => {
    todoServiceMock.getCountCompletedTodos.mockReturnValue(0);
    expect(component.hasCompletedTodos).toBe(false);
  });
});
