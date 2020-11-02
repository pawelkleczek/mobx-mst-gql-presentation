import { makeObservable, observable, action } from 'mobx'
import { v4 as uuid } from 'uuid';

export class Todo {
  id: string;
  title: string
  completed: boolean

  constructor(title: string, completed: boolean = false) {
    this.id = uuid();
    this.title = title
    this.completed = completed

    makeObservable(this, {
      title: observable,
      completed: observable,
      toggle: action.bound
    })
  }

  toggle() {
    this.completed = !this.completed
  }
}
