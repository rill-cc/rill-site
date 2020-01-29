import { useRef, useState } from 'react'
import { Flex, Grid, Text } from './system'
import { C, Section } from './bridge'
import { LiItem } from './HowEls'

const Utilities = props =>
	<Section heading='Utilities'>

		<LiItem
			row='1'
			title={C.Utilities[0].title}
			desc={C.Utilities[0].desc}
		/>
		<LiItem
			row='2'
			title={C.Utilities[1].title}
			desc={C.Utilities[1].desc}
		/>
		<LiItem
			row='3'
			title={C.Utilities[2].title}
			desc={C.Utilities[2].desc}
		/>

		<Grid as='aside'
			gridColumn='7/-1'
			gridRow='1/4'
			flexes='ccc'
			bg='accent'
			height='800px'
		>
			Image
		</Grid>

	</Section>

export default Utilities