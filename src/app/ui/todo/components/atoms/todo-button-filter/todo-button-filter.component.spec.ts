import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoButtonFilterComponent } from './todo-button-filter.component';
import { TodoService } from '../../../../../core/services/todo/todo.service';

describe('TodoButtonFilterComponent', () => {
  let component: TodoButtonFilterComponent;
  let fixture: ComponentFixture<TodoButtonFilterComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoButtonFilterComponent],
      providers: [
        {
          provide: TodoService,
          useValue: {
            setCurrentFilter: jest.fn()
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    todoService = TestBed.inject(TodoService);
    fixture = TestBed.createComponent(TodoButtonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setCurrentFilter method of TodoService with correct filter when clicked', () => {
    const filter = 'active';
    component.filter = filter;
    component.onClickFilter();
    expect(todoService.setCurrentFilter).toHaveBeenCalledWith(filter);
  });

  it('should not call setCurrentFilter method of TodoService when no filter is set', () => {
    (component as any).filter = undefined;
    component.onClickFilter();
    expect(todoService.setCurrentFilter).not.toHaveBeenCalled();
  });
});
