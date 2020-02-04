import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Outro = props => {

const ref = useRef(null)
const [height, setHeight] = useState(null)

const handleVideoHeight = () => {
	const refBounds = ref.current.getBoundingClientRect()
	setHeight(refBounds.width / 2)
}

useEffect(handleVideoHeight, [ref])

	return (
		<Layout>
			<Text
				gridColumn='1/7'
				bg='accent'
				p={4}
				flexes='css'
				variant='s1'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				If you find the project interesting, you can follow updates by subscribing to newsletter.
			</Text>

			<Text
				gridColumn='7/-1'
				bg='black'
				p={4}
				ref={ref}
				height={height}
				variant='s1'
				color='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'whites.0'
				}}
			>
				Have a question?
			</Text>

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
				flexes='cbs'
				height={height}
			>
				<Flex flexes='ccc' width='100%' flexGrow='1'>
					<Button bg='accent' color='black' width='100%'>Contact</Button>
				</Flex>
				<Flex>
					<Text variant='s4' color='blacks.3'> </Text>
				</Flex>
			</Flex>

		</Layout>
	)
}

export default Outro