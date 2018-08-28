import C from '../constants'

export const Item = (state ={}, action={type:null}) => {
  switch(action.type){
    case C.ON_TOGGLE:
      return {

      }
    case C.ON_REMOVE:
      return state.filter(
                c => c.id !== action.id
            )
  }
}

export const ItemList = (state = [], action={type:null}) =>{
  switch(action.type){
    case C.ON_TOGGLE:
      return {

      }
    case C.ON_REMOVE:
      return state.filter(
                c => c.id !== action.id
            )
  }
}

export const Form = (state = {}, action={type: null}) => {
  switch(action.type){
    case C.ON_CHANGE:
      return
    case C.ON_CREATE:
      return
    case C.ON_KEY_PRESS:
      return
  }
}
