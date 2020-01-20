import React, { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Image } from './system'
import { Layout } from './bridge'

const Intro = props => {

const ref = useRef(null)
const [height, setHeight] = useState(null)

useEffect(() => {
	const handleVideoHeight = () => {
		const refBounds = ref.current.getBoundingClientRect()
		setHeight(refBounds.height)
	}
	window.addEventListener('load', handleVideoHeight)
	window.addEventListener('resize', handleVideoHeight)
	return () => {
		window.removeEventListener('load', handleVideoHeight)
		window.removeEventListener('resize', handleVideoHeight)
	}
}, [ref])

	return (
		<Layout>

			<Grid
				gridColumn='1/7'
				bg='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.1',
				}}
			>
				<Flex flexes='css' p={4}>
					<Text variant='s1' decor='caps'>RILL.</Text>
					<Text variant='s1'>Open platform that helps interconnect environmental events and track updates.</Text>
				</Flex>
			</Grid>

			<Grid
				ref={ref}
				gridColumn='7/-1'
				bg='black'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'whites.0',
				}}
			>
			<Image src='/images/video.png' alt='platform'/>
			</Grid>

			<Grid
				gridColumn='1/7'
				gridRow='2'
				flexes='csc'
				bg='accent'
				p={3}
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
					<Text variant='s3' decor='caps' color='blacks.3'>Your email</Text>
				</Flex>
			</Grid>

			<Grid
				gridColumn='7/-1'
				gridRow='2'
				bg='black'
				p={3}
				flexes='cse'
				height={height}
			>
				<Text variant='s4' color='whites.2'>
				Platform overview: 1) Selecting node, 2) Finding connections, 3) Creating new node.</Text>	
			</Grid>

		</Layout>
	)
}

export default Intro