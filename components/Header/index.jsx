import React from 'react'
import PropTypes from 'prop-types'
import globals from '../../models/globals'
import theme from '../../models/theme'

const Header = (props) => {
  return (
    <div style={styles.root}>
      <a style={styles.imgLink} href={globals.website} target="_blank">
        <img width='100%' src={globals.headerImg} />
      </a>
      <div style={styles.welcome}>
        <p>{globals.toast}</p>
      </div>
      <div style={styles.linkContainer}>
        <div style={{ marginBottom: '1vh' }}>
          {globals.social.map((link, index) => {
            const seperator = (index < (globals.social.length - 1)) ? '|' : '';
            return(
              <span key={`social-${index}`}><a style={styles.links} href={link.href}>{link.name}</a> {seperator} </span>
            )
          })}
        </div>
        <div>
          {globals.links.map((link, index) => {
            const seperator = (index < (globals.social.length - 1)) ? '|' : '';
            return(
              <span key={`social-${index}`}><a style={styles.links} href={link.href}>{link.name}</a> {seperator} </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const styles = {
  root: {
  },
  imgLink: {
    width: ' 40vw',
    margin: 'auto'
  },
  welcome: {
    color: theme.primary,
    textAlign: 'center',
    fontSize: ' 1.2rem'
  },
  linkContainer: {
    textAlign: 'center',
    fontSize: ' 0.9rem'
  },
  links: {
    color: theme.primary,
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}

module.exports = Header