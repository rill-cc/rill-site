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

<<<<<<< HEAD
		<Flex
			gridColumn='7/-1'
			bg='black'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'whites.0',
			}}
		>
		<Image src='/images/video.png' alt='platform'/>
		</Flex>
=======
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
>>>>>>> b707c2399db4fb50e4cab44fb63e524a47c6bd4a

		<Flex
			gridColumn='1/7'
			gridRow='2'
			width='100%'
			flexes='cbs'
			px={3}
			bg='accent'
		>
				
			<Signup
				mt={[8, null, 9]}
				mb={[7, null, 8]}
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