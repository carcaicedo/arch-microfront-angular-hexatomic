import { computed, Injectable, inject } from '@angular/core';
import { ITodo } from '../../models/todo.model';
import { TodoRepository } from '../../repositories/todo.repository';
import { TODO_REPOSITORY_TOKEN } from '../../../infrastructure/adapters/todo-repository.token';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoRepository = inject(TODO_REPOSITORY_TOKEN) as TodoRepository;

  public todos = (this.todoRepository.getTodosSignal?.bind(this.todoRepository) ?? (() => () => []))();

  public todosFiltered = (this.todoRepository.getTodosFilteredSignal?.bind(this.todoRepository) ?? (() => () => []))();

  readonly activeCount = computed(() => {
    return this.todos().filter(todo => !todo.completed).length;
  });

  readonly completedCount = computed(() => {
    return this.todos().filter(todo => todo.completed).length;
  });

  constructor() { }

  addTodo(todo: ITodo) {
    this.todoRepository.addTodo(todo.title);
  }

  toggleTodo(id: number) {
    this.todoRepository.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoRepository.deleteTodo(id);
  }

  clearCompleted() {
    this.todoRepository.clearCompleted();
  }

  updateTodo(id: number, title: string) {
    this.todoRepository.updateTodo(id, title);
  }

  getCountActiveTodos() {
    return this.activeCount();
  }

  getCountCompletedTodos() {
    return this.completedCount();
  }

  getActiveTodos() {
    return this.todos().filter(todo => !todo.completed);
  }

  setCurrentFilter(filter: 'all' | 'active' | 'completed') {
    this.todoRepository.currentFilter = filter;
  }

  toggleAll() {
    this.todoRepository.toggleAll();
  }
}
