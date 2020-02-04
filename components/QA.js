import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Button } from './system'
import { C, Section } from './bridge'

import { QAItem } from './QAEls'

const QA = props => {

	const QAItemList = C.QA.map(item =>
		<QAItem
			key={item.id}
			title={item.title}
			desc={item.desc}
		/>
	)

	return (
		<Section heading='Q&A'>
			<Flex
				gridColumn='1/7'
			>
				{QAItemList}
			</Flex>
			
			<Flex
				gridColumn='7/-1'
				bg='accent'
				flexes='ccc'
			>
				<Flex
					p={3}
					width='100%'
					height='50%'
					sx={{
						borderBottom: '1px solid',
						borderColor: 'blacks.0',
					}}
				>
					<Text variant='s2'>Have a question?</Text>
				</Flex>

				<Flex
					bg='accent'
					width='100%'
					height='50%'
					p={3}
				>
					<Flex
						flexes='ccc'
						width='100%'
					>
						<Button bg='black' color='accent' width='100%'>Contact</Button>
					</Flex>

			</Flex>

			</Flex>
		</Section>
		)
}

export default QA