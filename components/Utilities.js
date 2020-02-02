import { useRef, useState } from 'react'
import { Flex, Grid, Text, Image } from './system'
import { C, Section } from './bridge'
import { LiItem } from './UtilitiesEls'

const Utilities = props => {

	const LiItemList = C.Utilities.map(item =>
		<LiItem
			key={item.id}
			row={item.id}
			title={item.title}
			desc={item.desc}
			icon={item.id}
		/>
	)

	return (
	<Section heading='Utilities'>

		{LiItemList}

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
	)
}

export default Utilities