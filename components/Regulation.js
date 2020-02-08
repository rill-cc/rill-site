import { Flex, Grid, Text } from './system'
import { C, Section, Layout } from './bridge'
import { LiItem } from './RegulationEls'

const Regulation = props => {

	const RowItemList = C.Regulation.map(item =>
		<Layout
			key={item.id}
			gridColumn='1/-1'
		>
			<Grid
				gridColumn={{ min: '1/-1', sm: '1/7' }}
				py={{ min: 3, xsm: 4 }}
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
			<Flex
				gridColumn={{ min: '1/-1', xsm: '1/6', sm: '1/4' }}
				flexes='css'
			>
				<Text
					variant='s3'
					pb={2}
					pl={{ min: 3, xsm: 4 }}
				>
					{item.rowTitle}
				</Text>
				<Text
					variant='s3'
					color='blacks.3'
					pl={{ min: 3, xsm: 4 }}
				>
					{item.rowDesc}
				</Text>
			</Flex>
				
			</Grid>

			<Flex as='ul'
				flexes='rss'
				gridColumn={{ min: '1/-1', sm: '7/-1' }}
				height='100%'
			>
				{item.children.map(point =>
					<LiItem
						key={point.id}
						liTitle={point.liTitle}
						liDesc={point.liDesc}
					/>
					)}
			</Flex>
		</Layout>
	)

	return (
	<Section heading='Content Regulation'>
		{RowItemList}
	</Section>
	)
}

export default Regulation