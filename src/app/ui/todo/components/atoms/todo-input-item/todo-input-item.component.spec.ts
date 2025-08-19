import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputItemComponent } from './todo-input-item.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';
import { FormsModule } from '@angular/forms';

describe('TodoInputItemComponent', () => {
  let component: TodoInputItemComponent;
  let fixture: ComponentFixture<TodoInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoInputItemComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            addTodo: jest.fn(),
            updateTodo: jest.fn(),
            deleteTodo: jest.fn(),
            getTodos: jest.fn(),
            setCurrentFilter: jest.fn()
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
