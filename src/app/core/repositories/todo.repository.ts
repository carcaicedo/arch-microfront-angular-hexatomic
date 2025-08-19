import { ITodo } from "../models/todo.model";

export interface TodoRepository {
  getAll(): ITodo[];
  addTodo(title: string): ITodo;
  toggleTodo(id: number): ITodo;
  deleteTodo(id: number): void;
  clearCompleted(): void;
  updateTodo(id: number, title: string): ITodo;
  filterTodos(): void;
  toggleAll(): void;
  currentFilter: 'all' | 'active' | 'completed';
  getTodosSignal?(): import('@angular/core').Signal<ITodo[]>;
  getTodosFilteredSignal?(): import('@angular/core').Signal<ITodo[]>;
}
