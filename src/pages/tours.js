import React, { Component } from 'react'
import Layout from "../components/Layout"
import Button from '../styled-component-examples/Button'

class tours extends Component {
  render() {
    return (
      <Layout>
        Hello from Tours Page !!!!!
        <div>
          <Button>First Button</Button>
          <Button color="yellow">Second Button</Button>
        </div>
      </Layout>
    )
  }
}

export default tours