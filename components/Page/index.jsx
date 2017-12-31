import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Article from '../Article'
import theme from '../../models/theme'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    const {articles} = this.props.model
    const title = 'Carleton Newsletter'
    return (
      <div style={styles.root}>
        <div style={styles.body}>
          <Header/>
          {articles.map((article, index) => <Article key={`article-${index}`} {...article}/> )}
        </div>
      </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: 'Helvetica',
    margin: 'auto',
    width: '100%',
    maxWidth:'1024px',
    paddingTop:'5vh 0 5vh 0',
    backgroundColor:theme.body,
    borderRadius: '10px'
  },
  body: {
    padding: '0 2vw 2vh 2vw',
  }
}

Page.propTypes = {
  model: PropTypes.object,
}

Page.defaultProps = {
  model: {},
}

module.exports = Page