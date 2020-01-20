import React from 'react'
import { Theme } from '../components/system/theme'
import { Meta } from '../components/Meta'

import {
  Intro,
  For,
} from '../components/bridge'

import HelperGrid from '../components/Utils'

const App = props => {
  return (
    <Theme>
      <HelperGrid />
      <Intro />
      <For />
    </Theme>
    )
}

export default App