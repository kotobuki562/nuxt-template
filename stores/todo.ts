import { defineStore } from 'pinia'

export interface Todo {
  id: number
  title: string
  completed: boolean
  content: string
  createdAt: Date
}

export const useNewTodo = defineStore('newTodo', {
  state: (): Todo => ({
    id: 0,
    title: '',
    completed: false,
    content: '',
    createdAt: new Date(),
  }),
})

export const useTodo = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    add(todo: Todo) {
      this.todos.push(todo)
    },
    remove(todo: Todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id)
      this.todos.splice(index, 1)
    },
    toggle(todo: Todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id)
      this.todos[index].completed = !this.todos[index].completed
    },
    update(todo: Todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id)
      this.todos[index] = todo
    },
  },
})
