import React from 'react'
import PropTypes from 'prop-types'
import globals from '../../models/globals'
import theme from '../../models/theme'
import Button from '../Button'
import Content from '../Content'

const Header = ({ toast = '' }) => {
  return (
    <div style={styles.root}>
      <a style={styles.imgLink} href={globals.website} target='_blank'><img width='100%' src={globals.headerImg} /></a>
        {toast ? <div style={styles.welcome}>{
          Array.isArray(toast) ? toast.map(({tag, attr, text}, ind) => {
            return <Content key={`a-text-${ind}`} tag={tag} attr={attr}>{text}</Content>
          }) : <p>{toast}</p>
      }</div> : ''}
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
    fontSize: '20px'
  },
  linkContainer: {
    color: theme.primary,
    textAlign: 'center',
    fontSize: ' 0.9rem'
  },
  buttons: {
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '10px 20px 10px 20px',
    padding: '0 15px',
    width:'120px'
  }
}

module.exports = Header