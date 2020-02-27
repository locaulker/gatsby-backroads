import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div>Hello from backgrounds</div>
    <Link to="/">Home</Link>
    <Link to="/rooms">Rooms</Link>
  </Layout>
)
