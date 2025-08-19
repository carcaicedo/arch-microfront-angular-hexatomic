import { InMemoryTodoRepository } from './in-memory-todo.repository';

describe('InMemoryTodoRepository', () => {
  let repo: InMemoryTodoRepository;

  beforeEach(() => {
    repo = new InMemoryTodoRepository();
  });

  it('should be created', () => {
    expect(repo).toBeTruthy();
  });

  it('should add a todo', () => {
    repo.addTodo('Test');
    expect(repo.getAll().length).toBe(1);
    expect(repo.getAll()[0].title).toBe('Test');
  });

  it('should toggle a todo', () => {
    const todo = repo.addTodo('Toggle');
    repo.toggleTodo(todo.id);
    expect(repo.getAll()[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const todo = repo.addTodo('Delete');
    repo.deleteTodo(todo.id);
    expect(repo.getAll().length).toBe(0);
  });

  it('should clear completed todos', () => {
    repo.addTodo('A');
    const b = repo.addTodo('B');
    repo.toggleTodo(b.id);
    repo.clearCompleted();
    expect(repo.getAll().every(t => !t.completed)).toBe(true);
    expect(repo.getAll().length).toBe(1);
  });

  it('should update a todo', () => {
    const todo = repo.addTodo('Old');
    repo.updateTodo(todo.id, 'New');
    expect(repo.getAll()[0].title).toBe('New');
  });

  it('should toggle all todos', () => {
    repo.addTodo('A');
    repo.addTodo('B');
    repo.toggleAll();
    expect(repo.getAll().every(t => t.completed)).toBe(true);
    repo.toggleAll();
    expect(repo.getAll().every(t => !t.completed)).toBe(true);
  });

  it('should filter active todos', () => {
    repo.addTodo('A');
    const b = repo.addTodo('B');
    repo.toggleTodo(b.id);
    repo.currentFilter = 'active';
    expect(repo.getTodosFilteredSignal()().length).toBe(1);
    expect(repo.getTodosFilteredSignal()()[0].completed).toBe(false);
  });

  it('should filter completed todos', () => {
    repo.addTodo('A');
    const b = repo.addTodo('B');
    repo.toggleTodo(b.id);
    repo.currentFilter = 'completed';
    expect(repo.getTodosFilteredSignal()().length).toBe(1);
    expect(repo.getTodosFilteredSignal()()[0].completed).toBe(true);
  });

  it('should filter all todos', () => {
    repo.addTodo('A');
    repo.addTodo('B');
    repo.currentFilter = 'all';
    expect(repo.getTodosFilteredSignal()().length).toBe(2);
  });
});
