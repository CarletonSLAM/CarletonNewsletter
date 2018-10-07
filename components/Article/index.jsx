import React from 'react'
import PropTypes from 'prop-types'
import globals from '../../models/globals'
import theme from '../../models/theme'
import Content from '../Content'

const imageBase = 'https://raw.githubusercontent.com/CarletonSLAM/CarletonNewsletter/master/img/'

const Article = (props) => {

  return (
    <div style={styles.root}>
      <div style={styles.title} >{props.title}</div>
      {(props.img !== undefined) ? <div><img width='100%' src={props.externalImg ? props.img : (imageBase + props.img)} /></div> : ''}
      {(props.date && props.time && props.location) ?
        <div style={styles.logistics}>
          {(props.date !== undefined) ? <div>Date: {props.date}</div> : ''}
          {(props.date !== undefined) ? <div>Time: {props.time}</div> : ''}
          {(props.date !== undefined) ? <div>Location: {props.location}</div> : ''}
        </div>
        : ''
      }
      <div style={styles.textarea}>
        {props.body.map(({tag, attr, text}, ind) => {
          return <Content key={`a-text-${ind}`} tag={tag} attr={attr}>{text}</Content>
        })}
      </div>
    </div>
  )
}

const styles = {
  root: {
    border: theme.primary + ' 5px solid',
    backgroundColor: '#fff',
    color: '#00629B',
    textAlign: 'center',
    margin: '3vh',
    paddingBottom: '2vh',
  },
  title: {
    padding: '1.2vh 0 1.2vh 0',
    fontSize: '2rem',
    backgroundColor: theme.cardTop,
    color: '#FFF',
    fontWeight: 'bold'
  },
  logistics: {
    padding: '2vh 0 0 0',
    fontSize: '1.3rem',
    fontWeight: 'bold'

  },
  textarea: {
    padding: '1vh 10px 0 10px'
  }
}

module.exports = Article
