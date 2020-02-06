import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Intro = props => {

	const ref = useRef(null)
	const [height, setHeight] = useState(null)

	const handleContainerHeight = () => {
		const refBounds = ref.current.getBoundingClientRect()
		setHeight(refBounds.height / 2)
	}
	useEffect(handleContainerHeight, [ref])

	return (
		<Layout>

			<Flex
				gridColumn='1/7'
				bg='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Flex
					flexes='css'
					p={4}
				>
					<Text variant='s1' styling='caps'>RILL.</Text>
					<Text variant='s1'>Open platform that helps interconnect environmental events and track updates.</Text>
				</Flex>
			</Flex>

			<Flex
				ref={ref}
				gridColumn='7/-1'
				bg='black'
				height='fit-content'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'whites.0',
				}}
			>
			<Image src='/images/video.png' alt='platform'/>
			</Flex>

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

			<Flex
				gridColumn='7/-1'
				gridRow='2'
				bg='black'
				p={3}
				flexes='ces'
				height={height}
			>
				<Text variant='s4' color='whites.2'>
					Platform overview: 1) Selecting node, 2) Finding connections, 3) Creating new node.
				</Text>
			</Flex>

		</Layout>
	)
}

export default Intro