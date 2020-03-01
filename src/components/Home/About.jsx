import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from '../../images/defaultBcg.jpeg'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="About Company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="An Awesome Landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the Difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            est. Beatae, dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            est. Beatae, dolore?
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
