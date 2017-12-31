import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../models/theme'

const Link = (props) => {

  const attr = props.attr
  attr.style = Object.assign(styles.root, attr.style)
  return (
    <a target='_blank' {...attr}><span>{props.children}</span></a>
  )
}

const styles = {
  root: {
    display: 'inline-block',
    position: 'relative',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '5px',
    fontSize: '0.9em',
    backgroundColor: theme.primary,
    color: '#fff',
    textDecoration: 'none',
    padding: '0 15px'
  }
}

module.exports = Link