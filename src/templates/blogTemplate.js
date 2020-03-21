import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../components/SEO'


export const query = graphql`
  query getPost($slug:String!){
    post:contentfulPost(slug:{eq:$slug}) {
      title
      published (formatString:"MMM DD, YYYY")
      text {
        json
      }
    }
  }
`

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json }
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {

        return (
          <div className="rich">
            <h3>This is an Awesome Image!</h3>

            <img
              width="400"
              src={node.data.target.fields.file['en-US'].url}
              alt=""
            />
            <p>Images provided by John Doe</p>
          </div>
        )
      },
      "embedded-entry-block": (node) => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>This is another post: {title['en-US']}</h1>
            <img
              width="400"
              src={image['en-US'].fields.file['en-US'].url}
              alt=""
            />
            {documentToReactComponents(text['en-US'])}
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      }
    }
  }

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published: {published}</h4>

          <article className={styles.article}>
            {documentToReactComponents(json, options)}
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            All Posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default blogTemplate
