import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  todoForm = this.fb.group({
    text: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.text).subscribe((todo) => {
        this.todoForm.reset();
      });
    }
  }
}
