import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = environment.api;

  requestCount = 0;
  requestTodosStream$ = new ReplaySubject<number>(1);

  todoStream$ = this.requestTodosStream$.pipe(
    tap(() => console.log('requesting todos')),
    switchMap(() => this.http.get<Todo[]>(`${this.API_URL}/todos`))
  )
  constructor(private http: HttpClient){
    this.requestTodos();
  }

  requestTodos() {
    this.requestCount++;
    this.requestTodosStream$.next(this.requestCount);
  }

  addTodo(text: string ): Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}/todos`, { text }).pipe(tap(() => this.requestTodos()));
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.API_URL}/todos/${id}`).pipe(tap(() => this.requestTodos()));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.API_URL}/todos/${todo._id}`, todo).pipe(tap(() => this.requestTodos()));
  }
}
