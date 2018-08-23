import React from 'react'
import '../../stylesheets/template.scss'

const Template = ({form, children}) =>  {
  return (
    <main className="template">
      <div className="title">
        Todo List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="children-wrapper">
        {children}
      </section>
    </main>
  )
}

export default Template
