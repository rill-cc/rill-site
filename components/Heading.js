import { useRef, useState } from 'react'
import { Flex, Text } from './system'

export const Heading = props => {
	const [open, setOpen] = useState(false)
	const [height, setHeight] = useState(false)
	const ref = useRef(null)
	
	const toggleSection = () => {
		setOpen(!open)
		setHeight(open === false ? '0px' : `${ref.current.scrollHeight}px`)
	}
	return (
		<Text
			onClick={toggleSection}
			width='100%'
			variant='s1'
			decor='caps'
			py={6}
			px={4}
			sx={{ position: 'relative' }}
		>
			{props.children}
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
						content: '""',
						position: 'absolute',
						width: '21px',
						height: '1px',
						top: 0,
	  				bottom: 0,
	  				mt: 'auto',
	  				mb: 'auto',
						bg: 'black',
					},
					'::after': {
						content: '""',
						position: 'absolute',
						width: '1px',
						height: '21px',
						left: 0,
	  				right: 0,
	  				ml: 'auto',
	  				mr: 'auto',
						bg: 'black',
					}
				}}
			/>
		</Text>
	)
}