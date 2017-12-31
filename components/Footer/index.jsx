import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import globals from '../../models/globals'
import theme from '../../models/theme'

const Footer = (props) => {
  return (
    <div style={styles.root}>
      <div>
        {globals.links.bottom.map((link, index) => {
          const seperator = (index < (globals.links.bottom.length - 1)) ? '|' : '';
          return (
            <span key={`social-${index}`}><Link attr={{ style: styles.links, href: link.href }}>{link.name}</Link> {seperator} </span>
          )
        })}
      </div>
      <p>Newsletter made by:</p>
      <p>IEEE Carleton University Student Branch</p>
    </div>
  )
}

const styles = {
  root: {
    textAlign: 'center',
    color: theme.primary,
    fontSize: '15px'
  },
  links: {
    fontWeight: 'bold'
  }
}

module.exports = Footer