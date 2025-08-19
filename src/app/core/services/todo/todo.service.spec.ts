import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { TODO_REPOSITORY_TOKEN } from '../../../infrastructure/adapters/todo-repository.token';
import { TodoRepository } from '../../repositories/todo.repository';
import { ITodo } from '../../models/todo.model';

import { signal, Signal } from '@angular/core';

class MockTodoRepository implements TodoRepository {
  private todos: ITodo[] = [
    { id: 1, title: 'Test 1', completed: false },
    { id: 2, title: 'Test 2', completed: true }
  ];
  private todosSignal = signal<ITodo[]>(this.todos);
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  getTodosSignal(): Signal<ITodo[]> {
    return this.todosSignal;
  }

  getTodosFilteredSignal(): Signal<ITodo[]> {
    let filtered: ITodo[];
    switch (this.currentFilter) {
      case 'active':
        filtered = this.todos.filter(todo => !todo.completed);
        break;
      case 'completed':
        filtered = this.todos.filter(todo => todo.completed);
        break;
      default:
        filtered = this.todos;
    }
    return signal(filtered);
  }

  getAll() {
    return this.todos;
  }

  addTodo(title: string) {
    const todo = { id: Date.now(), title, completed: false };
    this.todos.push(todo);
    this.todosSignal.set(this.todos);
    return todo;
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    this.todosSignal.set(this.todos);
    return todo!;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todosSignal.set(this.todos);
  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.todosSignal.set(this.todos);
  }

  updateTodo(id: number, title: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.title = title;
    this.todosSignal.set(this.todos);
    return todo!;
  }

  toggleAll() {
    const allCompleted = this.todos.every(t => t.completed);
    this.todos.forEach(t => t.completed = !allCompleted);
    this.todosSignal.set(this.todos);
  }

  filterTodos(filter: 'all' | 'active' | 'completed' = 'all'): void {
    this.currentFilter = filter;
    // Optionally update the signal if needed
    this.todosSignal.set(this.todos);
  }
}

describe('TodoService', () => {
  let service: TodoService;
  let repo: MockTodoRepository;

  beforeEach(() => {
    repo = new MockTodoRepository();
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        { provide: TODO_REPOSITORY_TOKEN, useValue: repo }
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all todos', () => {
    expect(service.todos().length).toBe(2);
  });

  it('should add a todo', () => {
    service.addTodo({ id: 0, title: 'New', completed: false });
    expect(service.todos().length).toBe(3);
  });

  it('should toggle a todo', () => {
    const todo = service.todos()[0];
    service.toggleTodo(todo.id);
    expect(service.todos()[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const todo = service.todos()[0];
    service.deleteTodo(todo.id);
    expect(service.todos().length).toBe(1);
  });

  it('should clear completed todos', () => {
    service.clearCompleted();
    expect(service.todos().every(t => !t.completed)).toBe(true);
  });

  it('should update a todo', () => {
    const todo = service.todos()[0];
    service.updateTodo(todo.id, 'Updated');
    expect(service.todos()[0].title).toBe('Updated');
  });

  it('should count active todos', () => {
    expect(service.getCountActiveTodos()).toBe(1);
  });

  it('should count completed todos', () => {
    expect(service.getCountCompletedTodos()).toBe(1);
  });

  it('should get active todos', () => {
    const active = service.getActiveTodos();
    expect(active.length).toBe(1);
    expect(active[0].completed).toBe(false);
  });

  it('should set current filter', () => {
    service.setCurrentFilter('completed');
    expect(repo.currentFilter).toBe('completed');
  });

  it('should toggle all todos', () => {
    service.toggleAll();
    expect(service.todos().every(t => t.completed)).toBe(true);
    service.toggleAll();
    expect(service.todos().every(t => !t.completed)).toBe(true);
  });
});
