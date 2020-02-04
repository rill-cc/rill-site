import { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { C, Section } from './bridge'
import { IconExtLink } from './IconExtLink'

const Requests = props => {

	const RequestItemList = C.Requests.requests.map(item =>
		<Grid as='li'
			key={item.id}
			width='100%'
			py={4}
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
			gridTemplateColumns='repeat(6, 1fr)'
		>
			<Text
				gridColumn='1/5'
				pl={4}
			>
				{item.title}
			</Text>
			<Link
				color='blacks.3'
				gridColumn='5/-1'
				src={item.url}
				sx= {{ position: 'relative' }}
			>
				{item.linkTitle}
				<IconExtLink />
			</Link>
		</Grid>
		)

	return (
		<Section heading='Requests'>
			<Flex
				gridColumn='1/7'
				p={4}
				sx={{
					borderRight: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Text variant='s2'>{C.Requests.desc}</Text>
			</Flex>
			
			<Flex as='ul'
				gridColumn='7/-1'
			>
				{RequestItemList}
			</Flex>
		</Section>
		)
}

export default Requests