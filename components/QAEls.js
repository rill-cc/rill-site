import { useRef, useState, useEffect } from 'react'
import { Flex, Text } from './system'
import { IconReveal } from './IconReveal'

export const QAItem = props => {
	const [open, setOpen] = useState(false)
	const [height, setHeight] = useState('')
	const ref = useRef(null)
	
	const toggleSection = () => {
		setOpen(!open)
		setHeight(open === false ? '0px' : `${ref.current.scrollHeight}px`)
	}
	useEffect(() => {
			window.addEventListener('load', toggleSection)
			window.addEventListener('resize', toggleSection)
			return (() => {
				window.removeEventListener('load', toggleSection)
				window.removeEventListener('resize', toggleSection)
			})
		}, [ref])

	return (
		<Flex
			width='100%'
			flexes='css'
			sx={{
				borderBottom: '1px solid',
				borderColor: 'blacks.0',
				':last-child': {
					borderBottom: '0px solid',
				}
			}}
			height='max-content'
		>
			<Text
				width='100%'
				onClick={toggleSection}
				variant='s3'
				ps='sm'
				pr={{ min: 6 }}
				sx={{ position: 'relative' }}
			>
				{props.title}
				<IconReveal isOpen={open} />
			</Text>
			<Text
				ref={ref}
				width='100%'
				variant='s3'
				color='blacks.3'
				overflow='hidden'
				maxHeight={height}
				ps='xsm'
				mb={3}
			>
				{props.desc}
			</Text>
		</Flex>
	)
}