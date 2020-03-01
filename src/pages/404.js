import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'

const Error = () => {
  return (
    <Layout>
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
