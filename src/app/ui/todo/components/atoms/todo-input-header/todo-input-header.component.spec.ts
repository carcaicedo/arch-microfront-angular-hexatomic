/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputHeaderComponent } from './todo-input-header.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoInputComponent', () => {
  let component: TodoInputHeaderComponent;
  let fixture: ComponentFixture<TodoInputHeaderComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoInputHeaderComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            addTodo: jest.fn(),
            getTodos: jest.fn(() => []),
            getCurrentFilter: jest.fn(() => 'all'),
            setCurrentFilter: jest.fn()
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
    fixture = TestBed.createComponent(TodoInputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add a todo when title is empty', () => {
    component.title = '';
    component.addTodo();
    expect(todoService.addTodo).not.toHaveBeenCalled();
  });

  it('should add a todo when title is not empty', () => {
    component.title = 'New Todo';
    component.addTodo();
    expect(todoService.addTodo).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Todo',
      completed: false
    }));
    expect(component.title).toBe('');
  });

  it('should trim the title before adding a todo', () => {
    component.title = '  New Todo  ';
    component.addTodo();
    expect(todoService.addTodo).toHaveBeenCalledWith(expect.objectContaining({
      title: '  New Todo  '
    }));
  });
});
