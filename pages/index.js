import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'

import {
  Intro,
  For,
  How,
  Utilities,
  Regulation,
} from '../components/bridge'

import HelperGrid from '../components/utils'

const App = props =>
  <Theme>
    <HelperGrid />
    <Intro />
    <For />
    <How />
    <Utilities />
    <Regulation />
  </Theme>

export default App