import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <h1>Hello Wrld!</h1>
    <Link to="/blog">Blog</Link>
    <br />
    <Link to="/test">Test</Link>
  </Layout>
)
