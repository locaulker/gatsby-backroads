import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <h1>Hello from Blog Page</h1>
      <Link to="/">Back to HomePage</Link>
    </Layout>
  )
}

export default blog
