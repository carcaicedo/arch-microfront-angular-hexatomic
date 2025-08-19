import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoCheckboxComponent } from '../../components/atoms/todo-checkbox/todo-checkbox.component';
import { TodoInputHeaderComponent } from '../../components/atoms/todo-input-header/todo-input-header.component';
import { TodoFiltersComponent } from '../../components/molecules/todo-filters/todo-filters.component';
import { TodoItemComponent } from '../../components/molecules/todo-item/todo-item.component';
import { TodoFooterComponent } from '../../components/organisms/todo-footer/todo-footer.component';
import { TodoFormComponent } from '../../components/organisms/todo-form/todo-form.component';
import { TodoListComponent } from '../../components/organisms/todo-list/todo-list.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { TodoCounterComponent } from '../../components/molecules/todo-counter/todo-counter.component';
import { TodoClearButtonComponent } from '../../components/molecules/todo-clear-button/todo-clear-button.component';
import { TodoTextComponent } from '../../components/atoms/todo-text/todo-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoButtonFilterComponent } from '../../components/atoms/todo-button-filter/todo-button-filter.component';
import { RouterModule } from '@angular/router';
import { TodoInputItemComponent } from '../../components/atoms/todo-input-item/todo-input-item.component';
import { TodoButtonDeleteComponent } from '../../components/atoms/todo-button-delete/todo-button-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    TodoButtonDeleteComponent,
    TodoCheckboxComponent,
    TodoInputHeaderComponent,
    TodoFiltersComponent,
    TodoCounterComponent,
    TodoClearButtonComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    MainLayoutComponent,
    TodoComponent,
    TodoTextComponent,
    TodoButtonFilterComponent,
    TodoInputItemComponent,
  ],
  providers: [
  ],
})
export class TodoModule { }
