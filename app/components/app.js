import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';

export default Component.extend({
  @tracked todos: [],
  @tracked name: '',
  @tracked color: 'color: grey',
  _allTodos: [],
  actions: {
    addTodo(name) {
      this.todos = this.todos.concat({name: this.name, id: new Date().getTime()});
      this._allTodos = this.todos;
    },
    deleteTodo(i) {
      this.todos = this.todos.filter((_, index) => index !== i);
      this._allTodos = this.todos;
    },
    updateName(e) {
      this.name = e.target.value;
      this.color = this.getColor();
    },
    search(e) {
      const query = e.target.value;
      this.todos = this._allTodos.filter(item => item.name.toLocaleLowerCase().includes(query));
    },
    setColor(element, color) {
      element.style.color = color;
    }
  },
  getColor() {
    return `color: ${this.name.length < 50 ? 'grey' : 'red'}`
  }
});
