import React from 'react'
import { Flex, Image, Text } from './system'
import { C, Section } from './bridge'
import { LiItem } from './FeaturesEls'

export default function Features() {
	const LiItemList = C.Features.map(item => (
		<LiItem
			key={item.id}
			row={item.id}
			title={item.title}
			desc={item.desc}
			icon={item.id}
		/>
	))

	return (
		<Section heading='Features'>
			{LiItemList}

			<Flex
				as='aside'
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
				gridRow={{ min: '1', sm: '2/5' }}
				flexes='ccc'
				bg='accent'
			>
				<Image src='/images/panel.jpg' alt='panel' width='66.66%' />
				<Text variant='s4' color='blacks.3' p={3}>
					Working area control panel
				</Text>
			</Flex>
		</Section>
	)
}
