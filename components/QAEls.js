import { useRef, useState, useEffect } from 'react'
import { Flex, Text } from './system'
import { ButtonReveal } from './ButtonReveal'

export const QAItem = props => {
	const [open, setOpen] = useState(false)
	const [height, setHeight] = useState(false)
	const ref = useRef(null)
	
	const toggleSection = () => {
		setOpen(!open)
		setHeight(open === false ? '0px' : `${ref.current.scrollHeight}px`)
	}
	useEffect(toggleSection, [ref])

	return (
		<Flex
			width='100%'
			flexes='css'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
			}}
			height='max-content'
		>
			<Text
				width='100%'
				onClick={toggleSection}
				variant='s3'
				p={4}
				sx={{ position: 'relative' }}
			>
				{props.title}
				<ButtonReveal isOpen={open} />
			</Text>
			<Text
				width='100%'
				ref={ref}
				variant='s3'
				color='blacks.3'
				overflow='hidden'
				maxHeight={height}
				px={4}
			>
				{props.desc}
			</Text>
		</Flex>
	)
}