import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import todos from '../../data/todos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: {
    id: number,
    title: string,
    decsription: string,
    complete: boolean,
  }[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.todos = todos;
  }
}
