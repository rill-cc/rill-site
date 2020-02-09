import { useRef, useState } from 'react'
import { Flex, Image } from './system'
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
			gridColumn={{ min: '1/-1', sm: '7/-1' }}
			gridRow={{ min: '1', sm: '2/5' }}
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