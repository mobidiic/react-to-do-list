import {connect} from 'react-redux'
import Form from './Form'
import ItemList from './ItemList'
import {onChange, onCreate, onKeyPress, onToggle, onRemove} from '../actions'

export const NewItem = connect(
  null,
  dispatch =>
  ({
      onChange(){
        dispatch(onChange())
      },
      onCreate(){
        dispatch(onCreate())
      },
      onKeyPress(){
        dispatch(onKeyPress())
      }
    }
  )
)(Form)

export const Items = connect(
  state =>
  ({
      todos: [...state.todos]
  }),
  dispatch =>
  ({
    onToggle(id){
      dispatch(onToggle(id))
    },
    onRemove(id){
      dispatch(onRemove(id))
    }
  })
)(ItemList)
