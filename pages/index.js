import React from 'react'
import { Theme } from '../components/system/theme'

import {
  Meta,
  Intro,
  For,
  How,
  Features,
  Regulation,
  QA,
  Stages,
  Requests,
  Outro,
  Footer,
} from '../components/bridge'

const App = props =>
  <Theme>
    <Meta />
    <Intro />
    <For />
    <How />
    <Features />
    <Regulation />
    <QA />
    <Stages />
    <Requests />
    <Outro />
    <Footer />
  </Theme>

export default App