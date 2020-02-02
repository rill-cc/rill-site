import { Flex, Text } from './system'
import { IconReveal } from './IconReveal'

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
			borderBottom: `${props.isOpen ? null : '1px solid'}`,
			borderColor: 'blacks.0',
			cursor: 'row-resize',
		}}
	>
		{props.children}
		<IconReveal isOpen={props.isOpen} />
	</Text>