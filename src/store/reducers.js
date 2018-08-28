import C from '../constants'

export const item = (state ={}, action={type:null}) => {
  switch(action.type){
    case C.ON_TOGGLE:
      const {todos} = this.state
      const index = todos.findIndex(todo => todo.id === action.id)
      const selected = todos[index]
      const nextTodos = [...todos]
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked
      }
      return state.todos = nextTodos
    case C.ON_REMOVE:
      return state.filter(
                c => c.id !== action.id
            )
  }
}

export const itemList = (state = [], action={type:null}) =>{
  switch(action.type){
    case C.ON_TOGGLE:
      return state.map(c => Item(c, action))
    case C.ON_REMOVE:
      return state.filter(c => c.id !== action.id)
  }
}

export const form = (state = {}, action={type: null}) => {
  switch(action.type){
    case C.ON_CHANGE:
      return [
        ...state,
        input: action.input
      ]
    case C.ON_CREATE:
      return {
        id: action.id,
        checked: action.checked,
        text: action.text
      }
    case C.ON_KEY_PRESS:
      if(action.ifEnter == true){
        return {
        id: action.id,
        checked: action.checked,
        text: action.text
      }
  }
}
}
