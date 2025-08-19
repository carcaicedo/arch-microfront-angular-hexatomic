import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { TODO_REPOSITORY_TOKEN } from './infrastructure/adapters/todo-repository.token';
import { InMemoryTodoRepository } from './infrastructure/adapters/in-memory-todo.repository';
import { TodoModule } from './ui/todo/pages/todo/todo.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    TodoModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: TODO_REPOSITORY_TOKEN, useClass: InMemoryTodoRepository }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
