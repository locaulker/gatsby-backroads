import React, { Component } from 'react'
import Layout from "../components/Layout"

// Default Hero Image
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Tours from '../components/Tours/Tours'


class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        />
        <Tours />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp {
        fluid(quality:90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours