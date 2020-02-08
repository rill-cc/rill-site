import { Flex, Grid, Text } from './system'
import { Pict01, Pict02, Pict03 } from './Pictograms'

export const LiItem = props =>
	<Grid as='li'
		gridColumn={props.column}
		gridRow={props.row}
		py={{ min: 3, xsm: 4 }}
		pb={{ min: 8, xsm: 8, sm: 4 }}
		sx={{
			borderBottom: '1px solid',	
			borderColor: 'blacks.0',
		}}
		gridTemplateColumns={{
			min: 'repeat(12, 1fr)',
			sm: 'repeat(6, 1fr)',
		}}
	>
		<Flex
			gridColumn={{ min: '1/-1', xsm: '1/10', md: '1/4' }}
			flexes='css'
		>
			<Text as='h3'
				variant='s3'
				pb={2}
				pl={{ min: 3, xsm: 4 }}
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
		column: {min: '1/-1', sm: '1/7'},
	}