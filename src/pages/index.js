import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <Link to="/about/">About</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
