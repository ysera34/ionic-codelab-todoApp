import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import todos from '../../data/todos'; // export default
import { TodoPage } from '../todo/todo'; // export module

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: {
    id: number,
    title: string,
    description: string,
    complete: boolean,
  }[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.todos = todos;
  }

  openTodoPage(todoId) {
    // navigation controller : NavController
    // page stack structure, push and pop
    this.navCtrl.push(TodoPage, { id: todoId})
  }
}
