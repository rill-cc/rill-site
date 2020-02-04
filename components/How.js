import { useRef, useState } from 'react'
import { Flex, Text } from './system'
import { C, Section } from './bridge'
import { Fig01 } from './Figures.js'

const Utilities = props =>
	<Section heading='How'>

		<Flex as='ul'
			gridColumn='1/7'
			py={6}
			px={4}
			flexes='css'
		>
			<Text as='li' variant='s2' pb={3}>
				{C.How.steps[0].id}<br/>
				{C.How.steps[0].desc}
			</Text>
			<Text as='li' variant='s2'>
				{C.How.steps[1].id}<br/>
				{C.How.steps[1].desc}
			</Text>
		</Flex>

		<Flex as='aside'
			gridColumn='7/-1'
			flexes='ccc'
			bg='accent'
			height='800px'
		>
			<Fig01 />
		</Flex>

	</Section>

export default Utilities