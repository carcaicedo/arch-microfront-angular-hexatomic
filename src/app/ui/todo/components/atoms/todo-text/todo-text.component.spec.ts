/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoTextComponent } from './todo-text.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoTextComponent', () => {
  let component: TodoTextComponent;
  let fixture: ComponentFixture<TodoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTextComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit setEditing event when startEdit is called', () => {
    const spy = jest.spyOn(component.setEditing, 'emit');
    component.startEdit();
    expect(spy).toHaveBeenCalled();
  });
});
