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
				gridColumn='1/7'
				py={4}
				sx={{
					borderBottom: '1px solid',
					borderRight: '1px solid',
					borderColor: 'blacks.0',
				}}
				gridTemplateColumns='repeat(6, 1fr)'
			>
				<Text
					variant='s3'
					gridColumn='1/4'
					pb={2}
					pl={4}
				>
					{item.rowTitle}
				</Text>
				<Text
					variant='s3'
					color='blacks.3' alignSelf='end'
					gridColumn='1/4'
					pl={4}
				>
					{item.rowDesc}
				</Text>
				
			</Grid>

			<Flex as='ul'
				flexes='rss'
				gridColumn='7/-1'
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