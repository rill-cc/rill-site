import { Flex } from './system'

export const IconReveal = props =>
<Flex as='span'
	sx={{
		position: 'absolute',
		width: '21px',
		height: '21px',
		top: 0,
		bottom: 0,
		mt: 'auto',
		mb: 'auto',
		right: 4,
		'::before': {
			bg: `${props.isOpen ? 'blacks.2' : 'blacks'}`,
			content: '""',
			position: 'absolute',
			width: '21px',
			height: '1px',
			top: 0,
			bottom: 0,
			mt: 'auto',
			mb: 'auto',
		},
		'::after': {
			display: `${props.isOpen ? 'block' : 'none'}`,
			bg: 'blacks.2',
			content: '""',
			position: 'absolute',
			width: '1px',
			height: '21px',
			left: 0,
			right: 0,
			ml: 'auto',
			mr: 'auto',
		},
	}}
/>