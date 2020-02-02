import { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Outro = props => {

const ref = useRef(null)
const [height, setHeight] = useState(null)

const handleVideoHeight = () => {
	const refBounds = ref.current.getBoundingClientRect()
	setHeight(refBounds.height)
}

useEffect(handleVideoHeight, [ref])

	return (
		<Layout>

			<Grid
				gridColumn='1/7'
				bg='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Flex flexes='css' p={4}>
					<Text variant='s1'>
						If you find the project interesting, you can follow updates by subscribing to newsletter.
					</Text>
				</Flex>
			</Grid>

			<Grid
				
				gridColumn='7/-1'
				bg='black'
				p={4}
				sx={{
					borderBottom: '1px solid',
					borderColor: 'whites.0',
					position: 'relative',
					height: '0',
					overflow: 'hidden',
					pt: '56.25%',
				}}
			>
			<Text ref={ref} variant='s1' color='accent'
				sx={{
					width: '100%',
					position: 'absolute',
					height: '100%',
					width: '100%',
					top: 0,
					left: 0,
				}}
			>
				Have a question?
			</Text>
			</Grid>

			<Flex
				gridColumn='1/7'
				gridRow='2'
				bg='accent'
				width='100%'
				flexes='cbs'
				p={3}
			>
					<Flex
						flexGrow='1'
						flexes='ccc'
						width='100%'
					>
						<Signup />
					</Flex>
					<Text variant='s4' color='blacks.3' width='100%'>
						Updates about RILL project only.
					</Text>

			</Flex>

			<Grid
				gridColumn='7/-1'
				gridRow='2'
				bg='black'
				p={3}
				flexes='cse'
				height={height}
			>
			yo
			</Grid>

		</Layout>
	)
}

export default Outro