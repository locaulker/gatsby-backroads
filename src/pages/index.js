import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true">
      <Banner
        title="Continue Exploring"
        info="The ancient palace and fortress of the Moorish rulers of Grenada"
      >
        <AniLink fade to="/tours" className="btn-white">Explore Tours</AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`