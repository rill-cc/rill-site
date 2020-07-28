import React from 'react'
import { Text } from './system'
import { Layout } from './bridge'

export default function Footer() {
	return (
		<Layout width='100%' flexes='ccc' p={3}>
			<Text
				gridColumn={{ min: '1/-1', md: '5/9' }}
				variant='s4'
				color='blacks.3'
				textAlign='center'
			>
				RILL.CC, 2018—now.
			</Text>
		</Layout>
	)
}