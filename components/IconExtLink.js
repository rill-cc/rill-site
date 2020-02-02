import { Flex } from './system'

export const IconExtLink = props =>
<Flex as='span'
	sx={{
		position: 'absolute',
		width: '20px',
		height: '20px',
		top: 0,
		bottom: 0,
		mt: 'auto',
		mb: 'auto',
		right: 4,
		'::before': {
			content: '""',
			position: 'absolute',
			width: '8px',
			height: '1px',
			top: 0,
			right: 0,
			bg: 'blacks.2',
		},
		'::after': {
			content: '""',
			position: 'absolute',
			width: '1px',
			height: '8px',
			right: 0,
			top: 0,
			bg: 'blacks.2',
		}
	}}
/>