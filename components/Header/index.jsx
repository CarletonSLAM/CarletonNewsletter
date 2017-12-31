import React from 'react'
import PropTypes from 'prop-types'
import globals from '../../models/globals'
import theme from '../../models/theme'
import Button from '../Button'

const Header = ({ showToast = true }) => {
  return (
    <div style={styles.root}>
      <a style={styles.imgLink} href={globals.website} target='_blank'><img width='100%' src={globals.headerImg} /></a>
      {showToast ? <div style={styles.welcome}><p>{globals.toast}</p></div> : ''}
      <div style={styles.linkContainer}>
        <div style={{ marginBottom: '1vh' }}>
          {globals.links.top.map((link, index) => <span key={`social-${index}`}><Button attr={{ style: styles.buttons, href: link.href}}>{link.name}</Button>  </span> )}
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
    fontSize: '22px'
  },
  linkContainer: {
    color: theme.primary,
    textAlign: 'center',
    fontSize: ' 0.9rem'
  },
  buttons: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '1vh 2vw 1vh 2vw'
  }
}

module.exports = Header