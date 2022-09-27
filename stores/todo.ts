import { defineStore } from 'pinia'

export interface Todo {
  id: number
  title: string
  completed: boolean
  content: string
}

export const useTodo = defineStore('todo', {
  state: (): Todo[] => [],
  actions: {
    add(todo: Todo) {
      this.push(todo)
    },
    remove(todo: Todo) {
      const index = this.findIndex((t) => t.id === todo.id)
      this.splice(index, 1)
    },
    toggle(todo: Todo) {
      const index = this.findIndex((t) => t.id === todo.id)
      this[index].completed = !this[index].completed
    },
    update(todo: Todo) {
      const index = this.findIndex((t) => t.id === todo.id)
      this[index] = todo
    },
  },
})
