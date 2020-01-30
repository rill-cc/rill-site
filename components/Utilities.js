import { useRef, useState } from 'react'
import { Flex, Grid, Text, Image } from './system'
import { C, Section } from './bridge'
import { LiItem } from './UtilitiesEls'

const Utilities = props =>
	<Section heading='Utilities'>

		<LiItem
			row='1'
			title={C.Utilities[0].title}
			desc={C.Utilities[0].desc}
			icon='1'
		/>
		<LiItem
			row='2'
			title={C.Utilities[1].title}
			desc={C.Utilities[1].desc}
			icon='2'
		/>
		<LiItem
			row='3'
			title={C.Utilities[2].title}
			desc={C.Utilities[2].desc}
			icon='3'
		/>

		<Flex as='aside'
			gridColumn='7/-1'
			gridRow='1/4'
			flexes='ccc'
			bg='accent'
		>
			<Image
				src='/images/panel.png'
				alt='panel'
				width='66.66%'
			/>
		</Flex>

	</Section>

export default Utilities