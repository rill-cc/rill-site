import { Flex, Text } from './system'
import { ButtonReveal } from './ButtonReveal'

export const Heading = props =>
	<Text
		onClick={props.onChange}
		width='100%'
		variant='s1'
		styling='caps'
		py={6}
		px={4}
		sx={{
			position: 'relative',
			borderBottom: '1px solid',
			borderColor: 'blacks.0',
		}}
	>
		{props.children}
		<ButtonReveal isOpen={props.isOpen} />
	</Text>