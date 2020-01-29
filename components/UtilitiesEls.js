import { Flex, Grid, Text } from './system'

export const LiItem = props =>
	<Grid as='li'
		gridColumn={props.column}
		gridRow={props.row}
		flexes='cbe'
		py={4}
		sx={{
			borderBottom: '1px solid',	
			borderColor: 'blacks.0',
		}}
		gridTemplateColumns='repeat(6, 1fr)'
	>
		<Text as='h3'
			variant='s3'
			gridColumn='1/-1'
			pl={4}
		>
			{props.title}
		</Text>
		<Text
			variant='s3'
			color='blacks.3'
			alignSelf='end'
			gridColumn='1/5'
			pl={4}
		>
			{props.desc}
		</Text>
	</Grid>

	LiItem.defaultProps = {
		column: '1/7',
	}