import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/user@mysite.net"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Your Full Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email">Your email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="john.doe@mysite.net"
            />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Your Message goes here . . ."
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
