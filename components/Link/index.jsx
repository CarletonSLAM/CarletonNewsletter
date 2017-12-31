import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../models/theme'

const Link = (props) => {
  const attr = props.attr
  attr.style = Object.assign(styles.root, attr.style)
  return (
    <a target='_blank' {...attr}><span style={attr.style}>{props.children}</span></a>
  )
}

const styles = {
  root: {
    color: theme.primary
  }
}

module.exports = Link