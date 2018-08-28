import React, {Component} from 'react'
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
      this.handleCreate()
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
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render(){
    const {input, todos} = this.state
    const {handleChange, handleCreate, handleRemove, handleToggle, handleKeyPress} = this
    return (
      <Template form={(
        <Form value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
        />
      )}>
        <ItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </Template>
    )
  }
}


export default App
