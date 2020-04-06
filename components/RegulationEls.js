import React, { useState, useRef, useEffect } from 'react'
import { Layout } from './bridge'
import { Flex, Grid, Text, Link } from './system'

export const LiItem = props => (
	<Flex
		as='li'
		width={{ min: '100%', sm: '33.33%' }}
		height={{ min: 'auto', sm: '100%' }}
		ps='sm'
		sx={{
			flexGrow: '1',
			flexFlow: 'column',
			borderBottom: '1px solid',
			borderRight: '1px solid',
			borderColor: 'blacks.0',
		}}
	>
		<Text variant='s3' pb={1}>
			{props.liTitle}
		</Text>
		<Text variant='s3' color='blacks.3'>
			{props.liDesc}
		</Text>
	</Flex>
)

export const RowItem = props => {
	const [open, setOpen] = useState(false)
	const [height, setHeight] = useState('')
	const ref = useRef(null)

	const toggleBullets = () => {
		setOpen(!open)
		setHeight(open === false ? '0px' : '')
	}
	useEffect(toggleBullets, [ref])

	return (
		<Layout key={props.id} gridColumn='1/-1'>
			<Grid
				gridColumn={{ min: '1/-1', sm: '1/7' }}
				ps='ysm'
				sx={{
					borderBottom: '1px solid',
					borderRight: '1px solid',
					borderColor: 'blacks.0',
				}}
				gridTemplateColumns={{
					min: 'repeat(12, 1fr)',
					sm: 'repeat(6, 1fr)',
				}}
			>
				<Flex gridColumn={{ min: '1/-1', sm: '1/6', lg: '1/4' }} flexes='css'>
					<Text variant='s3' pb={2} ps='xsm'>
						{props.rowTitle}
					</Text>
					<Text variant='s3' color='blacks.3' ps='xsm' pb={5}>
						{props.rowDesc}
					</Text>
					<Link
						ms='xsm'
						link='underline'
						onClick={toggleBullets}
						sx={{
							display: ['flex', 'flex', 'none'],
						}}
					>
						Learn more
					</Link>
				</Flex>
			</Grid>

			<Flex
				as='ul'
				ref={ref}
				overflow='hidden'
				flexes={{ min: 'css', sm: 'rss' }}
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
				maxHeight={{ min: height, sm: '100%' }}
				bg={{ min: 'accent', sm: 'inherit' }}
			>
				{props.children.map(bullet => (
					<LiItem
						key={bullet.id}
						liTitle={bullet.liTitle}
						liDesc={bullet.liDesc}
					/>
				))}
			</Flex>
		</Layout>
	)
}
