import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'

import {
  Intro,
  For,
  How,
} from '../components/bridge'

import HelperGrid from '../components/Utils'

const App = props =>
  <Theme>
    <HelperGrid />
    <Intro />
    <For />
    <How />
  </Theme>

export default App