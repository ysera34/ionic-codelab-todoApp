import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import todos from '../../data/todos';

/**
 * Generated class for the NewTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
})
export class NewTodoPage {
  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean,
  } = {
    id: todos[todos.length - 1].id + 1,
    title: "",
    description: "",
    complete: false,
  };

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTodoPage');
  }

  saveTodo() {
    todos.push(this.todo);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
