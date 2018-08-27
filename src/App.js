import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import Template from './components/Template'
import Form from './components/Form'
import ItemList from './components/ItemList'

class App extends Component{
  id = 3
  state = {
    input: '',
    todos: [
      {id:0, text: 'create', checked: false},
      {id:1, text: 'your', checked: true},
      {id:2, text: 'To-do\'s', checked: false}
    ]
  }

  handleChange = (e) =>{
    this.setState({
      input: e.target.value
    })
  }

  handleCreate= () => {
    const {input, todos} = this.state
    this.setState({
      input:'',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleChange()
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.todos
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  render(){
    return (
      <Template form={(
        <Form value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
        />
      )}>
        <ItemList todos={todos} onToggle={handleToggle}/>
      </Template>
    )
  }
}


export default hot(module)(App)
