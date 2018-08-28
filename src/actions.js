import C from './constants'
import v4 from 'uuid'

export const onChange = (e) => (
  {
    type: C.ON_CHANGE,
    input: e.target.value
  }
)

export const onCreate = () => (
  {
    type: C.ON_CREATE,
    id: v4(),
    text: state.input,
    checked: false
  }
)

export const onRemove = (id) => (
  {
    type: C.ON_REMOVE,
    id
  }
)

export const onKeyPress = (e) => (
  {
    type: C.ON_KEY_PRESS,
    ifEnter: e.key === 'Enter',
    id: v4(),
    text: state.input,
    checked: false
  }
)

export const onToggle = (id) =>(
  {
    type: C.ON_TOGGLE,
    id
  }
)
