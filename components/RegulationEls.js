import { Flex, Text } from './system'

export const LiItem = props => 
	<Flex as='li'
		width={{ min: '100%', sm: '33.33%' }}
		height={{ min: 'auto', sm: '100%' }}
		ps='sm'
		sx={{
			flexGrow: '1',
			flexFlow: 'column',
			borderBottom: '1px solid',
			borderRight: '1px solid',
			borderColor: 'blacks.0',
			':last-child': {
				borderRight: '0px solid',
			}
		}}
	>
		<Text
			variant='s3'
			pb={1}
		>
			{props.liTitle}
		</Text>
		<Text
			variant='s3'
			color='blacks.3'
		>
			{props.liDesc}
		</Text>
	</Flex>