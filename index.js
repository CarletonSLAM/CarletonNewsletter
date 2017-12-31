import fs from 'fs'
import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Page from './components/Page'

import model from './models/10-3-2017'

const Wrapper = (props) => {
  return(
    <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
      <link rel='stylesheet' href='style.css' />
      <title>{`IEEE Carleton Newsletter ${props.title}`}</title>
    </head>
    <body>
      <Page {...props} />
    </body>
  </html>
    )
}


const html = renderToStaticMarkup(createElement(Wrapper, {
  model: model,
  title: '10-4-2017'
}))
fs.writeFile("records.html", html, 'utf-8', function (err) {
  if (err) {
    console.error('File Write Failed')
  }
});
