/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

test('it renders successfully', () => {
  const rootNode = document.createElement('div')

  ReactDOM.render(<App />, rootNode)
  ReactDOM.unmountComponentAtNode(rootNode)
})
