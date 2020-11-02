import { makeObservable, observable, action, computed, flow } from 'mobx'

import { Todo } from "./Todo";

export class Store {
  todos: Todo[]
  state?: 'error' | 'pending' | 'done'

  constructor(todos: Todo[]) {
    this.todos = todos

    makeObservable(this, {
      todos: observable,
      deleteTodo: action.bound,
      addTodo: action,
      unfinishedTodoCount: computed,
      fetchJson: flow
    })
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length
  }

  *fetchJson() {
    this.state = 'pending'

    const response = yield fetch('https://jsonplaceholder.typicode.com/todos')
    const json = yield response.json()

    this.todos = json.slice(0, 10).map((todo: Todo) => new Todo(todo.title, todo.completed))

    this.state = 'done'
  }
}
