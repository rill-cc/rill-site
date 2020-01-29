import { useRef, useState } from 'react'
import { Flex, Grid, Text } from './system'
import { C, Section } from './bridge'
import { LiItem } from './HowEls'

import { Scheme01 } from './Schemas.js'

const Utilities = props =>
	<Section heading='How'>

		<Grid as='ul'
			gridColumn='1/7'
			py={6}
			px={4}
			gridTemplateRows='max-content'
			sx={{
				borderTop: '1px solid',
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
		>
			<Text as='li' variant='s2' pb={3}>
				{C.How.steps[0].id}<br/>
				{C.How.steps[0].desc}
			</Text>
			<Text as='li' variant='s2'>
				{C.How.steps[1].id}<br/>
				{C.How.steps[1].desc}
			</Text>
		</Grid>

		<Grid as='aside'
			gridColumn='7/-1'
			flexes='ccc'
			bg='accent'
			height='800px'
		>
			<Scheme01 />
		</Grid>

	</Section>

export default Utilities