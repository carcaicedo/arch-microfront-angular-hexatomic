import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoCounterComponent } from './todo-counter.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoCounterComponent', () => {
  let component: TodoCounterComponent;
  let fixture: ComponentFixture<TodoCounterComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCounterComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            getTodosCount: jest.fn().mockReturnValue(5),
            getCompletedTodosCount: jest.fn().mockReturnValue(2),
            getActiveTodos: jest.fn().mockReturnValue(3)
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
    fixture = TestBed.createComponent(TodoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return active todos', () => {
    const activeTodos = component.activeTodos;
    expect(activeTodos).toBe(3);
    expect(todoService.getActiveTodos).toHaveBeenCalled();
  });
});
