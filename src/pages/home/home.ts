import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import todos from '../../data/todos'; // export default
import { TodoPage } from '../todo/todo'; // export module
import { NewTodoPage } from '../new-todo/new-todo'; // export module

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.todos = todos;
  }

  openTodoPage(todoId) {
    // navigation controller : NavController
    // page stack structure, push and pop
    this.navCtrl.push(TodoPage, { id: todoId})
  }

  openNewTodo() {
    let modal = this.modalCtrl.create(NewTodoPage);
    modal.present();
  }

  deleteTodo(todoId) {
    this.todos.splice(todoId - 1, 1);
  }
}
