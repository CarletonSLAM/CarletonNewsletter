import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import Article from '../Article'
import theme from '../../models/theme'

class Page extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {toast, articles} = this.props.model
    const title = 'Carleton Newsletter'
    return (
        <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          <link rel='stylesheet' href='style.css' />
          <title>{this.props.title}</title>
        </head>
        <body>
        <div style={styles.root}>
          <div style={styles.body}>
            <Header toast={toast} />
            {articles.map((article, index) => <Article key={`article-${index}`} {...article}/> )}
            <Footer/>
          </div>
        </div>
        </body>
      </html>
    )
  }
}

const styles = {
  root: {
    fontFamily: 'Helvetica',
    margin: 'auto',
    width: '100%',
    maxWidth:'900px',
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