import { Flex, Grid, Text } from './system'
import { Pict01, Pict02, Pict03 } from './Pictograms'

export const LiItem = props =>
	<Grid as='li'
		gridColumn={props.column}
		gridRow={props.row}
		py={4}
		sx={{
			borderBottom: '1px solid',	
			borderColor: 'blacks.0',
		}}
		gridTemplateColumns='repeat(6, 1fr)'
	>
		<Flex
			gridColumn='1/4'
			flexes='css'
		>
			<Text as='h3'
				variant='s3'
				pb={2}
				pl={4}
				sx={{ display: 'flex' }}
				flexes='rss'
			>
				{props.icon === '1' && <Pict01 />}
				{props.icon === '2' && <Pict02 />}
				{props.icon === '3' && <Pict03 />}
				
				{props.title}
				
			</Text>
			<Text
				variant='s3'
				color='blacks.3'
				pl={4}
			>
				{props.desc}
			</Text>
		</Flex>
	</Grid>

	LiItem.defaultProps = {
		column: '1/7',
	}