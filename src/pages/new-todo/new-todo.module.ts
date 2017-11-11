import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTodoPage } from './new-todo';

@NgModule({
  declarations: [
    NewTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTodoPage),
  ],
})
export class NewTodoPageModule {}
