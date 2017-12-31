/**
 * Carleton Newsletter Generator
 * Author: Irusha Vidanamadura (irusha@vidanamadura.net)
 */
import fs from 'fs'
import path from 'path'
import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Page from './components/Page'

const IMPORT_PATH = './models/newsletters/'
const EXPORT_PATH = './output/'

fs.readdir(IMPORT_PATH, function (err, files) {
  if (err) { return new Error(err) }
  files.forEach(function (file) {
    const model = require(path.resolve(IMPORT_PATH, file));
    const html = renderToStaticMarkup(createElement(Page, {
      model: model,
      title: `IEEE Carleton Newsletter ${file}`
    }))
    fs.writeFile(`${EXPORT_PATH}${file.split('.')[0]}.html`, html, 'utf-8', function (err) {
      if (err) {
        console.error('File Write Failed')
      }
    });
    
  });
});