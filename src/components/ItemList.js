import React, {Component} from 'react'

class ItemList extends Component {
  render(){
    const {todos, onToggle, onRemove} =this.props
    return (
      <div>
        <Item text="welcome"/>
        <Item text="Hello"/>
        <Item text="React"/>
      </div>
    )
  }
}

export default ItemList