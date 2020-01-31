import { Flex } from './system'

export const IconTask = props =>
<Flex as='span'
	sx={{
		position: 'absolute',
		width: '16px',
		height: '16px',
		top: 0,
		bottom: 0,
		mt: 'auto',
		mb: 'auto',
		border: '1px solid',
		borderColor: 'blacks.1',
		left: -4,
		'::before': {
			content: '""',
			position: 'absolute',
			width: '8px',
			height: '8px',
			borderRadius: '99px',
			bg: `${props.completed ? 'blacks.1' : null}`,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			mx: 'auto',
			my: 'auto',
		}
	}}
/>