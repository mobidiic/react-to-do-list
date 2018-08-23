import React, {Component} from 'react'
import Template from './components/Template'
import Form from './components/Form'
import ItemList from './components/ItemList'

class App extends Component{
  render(){
    return (
      <Template form={<Form/>}>
        <ItemList/>
      </Template>
    )
  }
}

export default App
