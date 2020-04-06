import { Flex } from './system'

const Container = props => <Flex as='span' mr={1} {...props} />

export const Pict01 = () => (
	<Container>
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='10' cy='10' r='6.5' stroke='black' />
			<path d='M7.5 7.5H12.5V12.5H7.5V7.5Z' stroke='black' />
		</svg>
	</Container>
)

export const Pict02 = () => (
	<Container>
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M4.5 4.5H8.5V8.5H4.5V4.5Z' stroke='black' />
			<path d='M8 8L12 12' stroke='black' />
			<path d='M11.5 11.5H15.5V15.5H11.5V11.5Z' stroke='black' />
		</svg>
	</Container>
)

export const Pict03 = () => (
	<Container>
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect x='4.5' y='4.5' width='11' height='11' stroke='black' />
			<circle cx='10' cy='10' r='2.5' stroke='black' />
		</svg>
	</Container>
)
