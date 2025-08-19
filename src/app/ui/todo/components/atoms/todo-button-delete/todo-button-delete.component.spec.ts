import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoButtonDeleteComponent } from './todo-button-delete.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoButtonDeleteComponent', () => {
  let component: TodoButtonDeleteComponent;
  let fixture: ComponentFixture<TodoButtonDeleteComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoButtonDeleteComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            deleteTodo: jest.fn()
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    todoService = TestBed.inject(TodoService);
    fixture = TestBed.createComponent(TodoButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteTodo method of TodoService with correct id when deleteTodo is called', () => {
    const todoId = 123;
    component.todo = { id: todoId, title: 'Test Todo', completed: false };
    component.deleteTodo();
    expect(todoService.deleteTodo).toHaveBeenCalledWith(todoId);
  });
});
