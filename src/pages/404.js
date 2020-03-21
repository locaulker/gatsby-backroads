import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

const Error = () => {
  return (
    <Layout>
      <SEO title="404 Error" />
      <header className={styles.error}>
        <Banner title="Oops! Page Not Found!">
          <AniLink fade to="/" className="btn-white">
            Back to Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
