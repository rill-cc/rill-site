import { useRef, useState, useEffect } from 'react'
import { Layout, Heading } from './bridge'

export const Section = props => {
	const [open, setOpen] = useState(props.keepOpen)
	const [height, setHeight] = useState(false)
	const ref = useRef(null)
	
	const toggleSection = () => {
		setOpen(!open)
		setHeight(open === false ? '0px' : '')
	}
	useEffect(toggleSection, [ref])
	
	return (
		<>
			<Heading
				onChange={toggleSection}
				isOpen={open}
			>
				{props.heading}
			</Heading>
			<Layout
				ref={ref}
				maxHeight={height}
				sx={{
					borderBottom: `${open ? '1px solid' : '0'}`,
					borderColor: 'blacks.0',
				}}
				{...props}
			>
				{props.children}
			</Layout>
		</>
		)
}

Section.defaultProps = {
	keepOpen: true,
}