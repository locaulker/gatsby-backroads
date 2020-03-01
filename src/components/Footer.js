import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import socialIcons from '../constants/social-icons'


const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* Footer Links */}
      <div className={styles.footerLinks}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>

      {/* Social Links */}
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        Copyright &copy; Backroads Travel Company &ndash; {new Date().getFullYear()}. All Rights Reserved
      </div>

    </footer>
  )
}

export default Footer
