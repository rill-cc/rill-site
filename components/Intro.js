import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Intro = props =>
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
			gridColumn='7/-1'
			height='fit-content'
			bg='black'
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
			width='100%'
			flexes='cbs'
			px={3}
			bg='accent'
		>
				
			<Signup
				mt={{all: 8, md: 9}}
				mb={{all: 7, md: 8}}
			/>

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
			p={3}
			flexes='ces'
			bg='black'

		>
			<Text variant='s4' color='whites.2'>
				Platform overview: 1) Selecting node, 2) Finding connections, 3) Creating new node.
			</Text>
		</Flex>

	</Layout>

export default Intro