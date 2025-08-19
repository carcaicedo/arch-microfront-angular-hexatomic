import { Injectable, signal } from '@angular/core';
import { TodoRepository } from '../../core/repositories/todo.repository';
import { ITodo } from '../../core/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryTodoRepository implements TodoRepository {
  private todos = signal<ITodo[]>([]);
  private todosFiltered = signal<ITodo[]>([]);
  private _currentFilter: 'all' | 'active' | 'completed' = 'all';
  private nextId = 1;

  getAll(): ITodo[] {
    return this.todos();
  }

  addTodo(title: string): ITodo {
    const newTodo: ITodo = {
      id: this.nextId++,
      title,
      completed: false
    };
    this.todos.set([...this.todos(), newTodo]);
    this.filterTodos();
    return newTodo;
  }

  toggleAll(): void {
    const allCompleted = this.todos().every(todo => todo.completed);
    const updatedTodos = this.todos().map(todo => ({
      ...todo,
      completed: !allCompleted
    }));
    this.todos.set(updatedTodos);
    this.filterTodos();
  }

  toggleTodo(id: number): ITodo {
    let updatedTodo: ITodo | undefined;
    this.todos.set(
      this.todos().map(todo => {
        if (todo.id === id) {
          updatedTodo = { ...todo, completed: !todo.completed };
          return updatedTodo;
        }
        return todo;
      })
    );
    this.filterTodos();
    return updatedTodo!;
  }

  deleteTodo(id: number): void {
    this.todos.set(this.todos().filter(todo => todo.id !== id));
    this.filterTodos();
  }

  clearCompleted(): void {
    this.todos.set(this.todos().filter(todo => !todo.completed));
    this.filterTodos();
  }

  getTodosSignal() {
    return this.todos;
  }

  getTodosFilteredSignal() {
    return this.todosFiltered;
  }

  updateTodo(id: number, title: string): ITodo {
    let updatedTodo: ITodo | undefined;
    this.todos.set(
      this.todos().map(todo => {
        if (todo.id === id) {
          updatedTodo = { ...todo, title };
          return updatedTodo;
        }
        return todo;
      })
    );
    this.filterTodos();
    return updatedTodo!;
  }

  filterTodos() {
    const currentTodos = this.todos();

    if (this._currentFilter === 'active') {
      return this.todosFiltered.set(currentTodos.filter(todo => !todo.completed));
    }

    if (this._currentFilter === 'completed') {
      return this.todosFiltered.set(currentTodos.filter(todo => todo.completed));
    }

    return this.todosFiltered.set(currentTodos);
  }

  public set currentFilter(filter: 'all' | 'active' | 'completed') {
    this._currentFilter = filter;
    this.filterTodos();
  }
}
