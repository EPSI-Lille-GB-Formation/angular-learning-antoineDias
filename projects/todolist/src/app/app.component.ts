import { Component} from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world!!</h1>
    <ul *ngFor="let todo of todoList">
      <li *ngIf="todo.isCompleted == true">{{ todo.title }}</li>
    </ul>
  `,
  styleUrls: []
})


export class AppComponent {

  todoList = TODOS;

  constructor() {}

  ngOnInit(){
    console.table(this.todoList);
    this.selectTodo(8);
  }

  selectTodo(id: number){
    console.table(this.todoList[id-1]);
  }

}
