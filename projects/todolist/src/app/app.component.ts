import { Component} from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world!!</h1>
    <ul>
      <li>{{ todoList[0].title }}</li>
      <li>{{ todoList[1].title }}</li>
      <li>{{ todoList[2].title }}</li>
      <li>{{ todoList[3].title }}</li>
      <li>{{ todoList[4].title }}</li>
      <li>{{ todoList[5].title }}</li>
      <li>{{ todoList[6].title }}</li>
      <li>{{ todoList[7].title }}</li>
      <li>{{ todoList[8].title }}</li>
      <li>{{ todoList[9].title }}</li>*
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
