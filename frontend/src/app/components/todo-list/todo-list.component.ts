import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$ = this.todoService.todoStream$;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
