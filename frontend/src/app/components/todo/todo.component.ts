import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  todoCopy: Todo | null = null;

  inEditMode = false;
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  updateTodo() {

    if(this.todoCopy && this.todoCopy.text.length > 3) {
      this.todoService.updateTodo(this.todoCopy).subscribe(() => {
        this.todoCopy = null;
      });
    } else if (this.todoCopy) {
      this.todoCopy = null;
    }
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo._id).subscribe(() => {
      this.todoCopy = null;
    });
  }

  toggleEditMode() {
    if(this.inEditMode) {
      this.updateTodo();
    } else {
      this.todoCopy = {...this.todo};
    }
    this.inEditMode = !this.inEditMode;
  }
}
