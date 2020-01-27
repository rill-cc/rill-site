import { Flex, Grid, Text } from './system'
import { C, Layout, Heading } from './bridge'
import { LiItem } from './HowEls'

const How = props =>
	<Flex>

		<Heading>How</Heading>

		<Layout as='ul'>

			<LiItem
				row='1'
				title={C.How[0].title}
				desc={C.How[0].desc}
			/>
			<LiItem
				row='2'
				title={C.How[1].title}
				desc={C.How[1].desc}
			/>
			<LiItem
				row='3'
				title={C.How[2].title}
				desc={C.How[2].desc}
			/>

			<Grid as='aside'
				gridColumn='7/-1'
				gridRow='1/4'
				flexes='ccc'
				bg='accent'
				height='800px'
			>
				Image
			</Grid>

		</Layout>

	</Flex>

export default How