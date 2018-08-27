import React, {Component} from 'react'
import '../../stylesheets/Form.scss'

const Form  = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>add</div>
    </div>
  )
}


export default Form
