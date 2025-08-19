import { InjectionToken } from '@angular/core';
import { TodoRepository } from '../../core/repositories/todo.repository';

export const TODO_REPOSITORY_TOKEN = new InjectionToken<TodoRepository>('TodoRepository');
