import { Flex, Text, Image, Input, Button } from './system'
import { Layout, Signup } from './bridge'

const Intro = props =>
	<Layout>

		<Flex
			gridColumn={{min: '1/-1', sm: '1/7'}}
			gridRow='1'
			bg='accent'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
		>
			<Flex
				flexes='css'
				ps='pSm'
				// p={{ min: 3, xsm: 4 }}
				pb={{min: 8, xsm: 8, sm: 0}}
			>
				<Text variant='s1' styling='caps'>RILL.</Text>
				<Text variant='s1'>Open platform that helps interconnect environmental events and track updates.</Text>
			</Flex>
		</Flex>

		<Flex
			gridColumn={{min: '1/-1', sm: '7/-1'}}
			gridRow={{min: 3, sm: 1}}
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
			gridColumn={{min: '1/-1', sm: '1/7'}}
			gridRow='2'
			width='100%'
			flexes='cbs'
			px={{ min: 3, xsm: 4 }}
			bg='accent'
		>
				
			<Signup
				mt={{min: 8, md: 9}}
				mb={{min: 7, md: 8}}
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
			gridColumn={{min: '1/-1', sm: '7/-1'}}
			gridRow={{min: 4, sm: 2}}
			p={3}
			flexes='ces'
			bg='black'

		>
			<Text
				variant='s4'
				color='whites.2'
				pt='8'
			>
				Platform overview: 1) Selecting node, 2) Finding connections, 3) Creating new node.
			</Text>
		</Flex>

	</Layout>

export default Intro