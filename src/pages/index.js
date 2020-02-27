import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SimpleHero from '../components/SimpleHero'
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue Exploring"
        info="The ancient palace and fortress of the Moorish rulers of Grenada"
      >
        <Link
          to="/tours"
          className="btn-white"
        >
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
