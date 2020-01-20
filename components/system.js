import React, { forwardRef } from 'react'
import { Box, Flex, Grid } from './system/box'

export { Box, Flex, Grid }

export const Text = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='p'
    tx='text'
    {...props}
  />
)

export const Link = forwardRef((props, ref) =>
  <Text
    as='a'
    variant='link'
    {...props}
  />
)

export const Button = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='button'
    variant='primary'
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 0,
    }}
  />
)

export const Image = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='img'
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)