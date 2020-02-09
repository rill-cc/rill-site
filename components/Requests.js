import { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { C, Section } from './bridge'
import { IconExtLink } from './IconExtLink'

const Requests = props => {

	const RequestItemList = C.Requests.requests.map(item =>
		<Grid as='li'
			key={item.id}
			width='100%'
			ps='ysm'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
			gridTemplateColumns={{
					min: 'repeat(12, 1fr)',
					sm: 'repeat(6, 1fr)'
				}}
		>
			<Text
				gridColumn={{ min: '1/7', sm: '1/4' }}
				ps='lsm'
			>
				{item.title}
			</Text>
			<Link
				src={item.url}
				gridColumn={{ min: '7/-1', sm: '4/-1' }}
				ps='rsm'
				textAlign={{ min: 'right', md: 'left' }}
				color='blacks.3'
				sx={{ position: 'relative' }}
			>
				{item.linkTitle}
				<Flex as='span'
					sx={{
						display: ['none', 'none', 'none', 'none', 'flex'],
					}}
				>
					<IconExtLink/>
				</Flex>
			</Link>
		</Grid>
		)

	return (
		<Section heading='Requests'>
			<Flex
				gridColumn={{ min: '1/-1', sm: '1/7' }}
				ps='sm'
				sx={{
					borderRight: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Text variant='s2'>{C.Requests.desc}</Text>
			</Flex>
			
			<Flex as='ul'
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
			>
				{RequestItemList}
			</Flex>
		</Section>
		)
}

export default Requests