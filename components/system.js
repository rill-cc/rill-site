import React, { forwardRef } from 'react'
import { Box, Flex, Grid } from './system/box'

export { Box, Flex, Grid }

export const Text = forwardRef((props, ref) => (
  <Box ref={ref} as='p' tx='text' {...props} />
))

export const Link = forwardRef((props, ref) => (
  <Text as='a' variant='link' {...props} />
))

export const Button = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as='a'
    px={{ min: 2, sm: 3 }}
    py={3}
    {...props}
    __css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontSize: 'inherit',
      color: 'inherit',
      bg: 'inherit',
      border: 0,
      borderRadius: 0,
    }}
  />
))

export const Input = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as='input'
    type='text'
    tx='forms'
    variant='input'
    py={3}
    {...props}
    __css={{
      display: 'block',
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      textTransform: 'uppercase',
      borderRadius: '0',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
))

export const Image = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as='img'
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
))
