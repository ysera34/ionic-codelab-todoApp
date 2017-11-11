import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import todos from '../../data/todos';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage implements OnInit {
  todo: {
    id: number,
    title: string,
    description: string,
    complete: boolean,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  ngOnInit() {
    // angular function
    // console.log(this.navParams.get('id'));

    // inter binding
    // this.todo = this.getTodo(this.navParams.get('id'))

    // temporarily object
    this.todo = Object.assign({}, this.getTodo(this.navParams.get('id')))
  }

  getTodo(todoId) {
    for (let todo of todos) {
      if (todo.id == todoId) {
        return todo;
      }
    }
    return undefined;
  }

  updateTodo() {
    todos[this.todo.id - 1] = this.todo
    this.navCtrl.popToRoot();
  }
}
