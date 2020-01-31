import { Grid, Text } from './system'

export const LiItem = props => 
	<Grid as='li'
		width='33.33%'
		height='100%'
		p={3}
		sx={{
			flexGrow: '1',
			flexFlow: 'column',
			borderBottom: '1px solid',
			borderRight: '1px solid',
			borderColor: 'blacks.0',
		}}
	>
		<Text
			variant='s3' pb={1}>{props.liTitle}</Text>
		<Text variant='s3' color='blacks.3'>{props.liDesc}</Text>
	</Grid>