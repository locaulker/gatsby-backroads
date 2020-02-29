import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"


const blog = () => {

  return (
    <Layout>
      <p>Hello from Blog Page</p>
      <Link to="/">Back to HomePage</Link>
    </Layout>
  )
}

export default blog
