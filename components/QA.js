import { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Image } from './system'
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
			<Flex gridColumn='1/7'>

				{QAItemList}
				
			</Flex>
			
			<Flex gridColumn='7/-1' bg='accent' flexes='css'>
				<Flex
					p={3}
					width='100%'
					sx={{
						borderBottom: '1px solid',
						borderColor: 'blacks.0',
					}}
				>
					<Text variant='s2'>Have a question?</Text>
				</Flex>
				<Flex
					p={3}
					width='100%'
				>
					<Flex
						p={3}
						width='-webkit-fill-available'
						height='fit-content'
						sx={{
							border: '1px solid',
							borderColor: 'blacks.1',
							}}
					>
						<Text variant='s3' styling='caps' color='blacks.3'>Your email</Text>
					</Flex>
				</Flex>
				</Flex>
		</Section>
		)
}

export default QA