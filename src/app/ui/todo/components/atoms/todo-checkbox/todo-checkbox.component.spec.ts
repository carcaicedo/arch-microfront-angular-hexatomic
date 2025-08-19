/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoCheckboxComponent } from './todo-checkbox.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoCheckboxComponent', () => {
  let component: TodoCheckboxComponent;
  let fixture: ComponentFixture<TodoCheckboxComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCheckboxComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            toggleTodo: jest.fn()
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
    fixture = TestBed.createComponent(TodoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleTodo method of TodoService when toggleTodo is called', () => {
    const todoId = 123;
    component.todo = { id: todoId, title: 'Test Todo', completed: false };
    component.toggleTodo();
    expect(todoService.toggleTodo).toHaveBeenCalledWith(todoId);
  });

});
