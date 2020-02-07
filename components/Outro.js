import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Outro = props => {

const ref = useRef(null)
const [height, setHeight] = useState(null)

const handleContainerHeight = () => {
	const refBounds = ref.current.getBoundingClientRect()
	setHeight(refBounds.width / 2)
}

useEffect(handleContainerHeight, [ref])

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
				width='100%'
				flexes='cbs'
				px={3}
				bg='accent'
			>
				<Flex
					width='100%'
					pt={9}
					pb={8}
				>
					<Signup />
				</Flex>
				<Text
					width='100%'
					pb={3}
					variant='s4'
					color='blacks.3'
				>
					Updates about RILL project only.
				</Text>
			</Flex>

			<Flex
				gridColumn='7/-1'
				gridRow='2'
				px={3}
				flexes='cbs'
				bg='black'
			>
				<Button
					width='100%'
					mt={9}
					mb={8}
					bg='accent'
					color='black'
				>
					Contact
				</Button>

				<Text
					pb={3}
					variant='s4'
					color='transparent'
				>
				&ensp;
				</Text>
			</Flex>

		</Layout>
	)
}

export default Outro