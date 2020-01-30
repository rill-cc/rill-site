import React, { forwardRef } from 'react'
import { Flex, Text } from './system'
import { ButtonReveal } from './ButtonReveal'

export const QAItem = forwardRef((props, ref) =>
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
			onClick={props.onChange}
			variant='s3'
			p={4}
			sx={{ position: 'relative' }}
		>
			{props.title}
			<ButtonReveal isOpen={props.isOpen} />
		</Text>
		<Text
			width='100%'
			ref={ref}
			variant='s3'
			color='blacks.3'
			overflow='hidden'
			maxHeight={props.maxHeight}
			px={4}
		>
			{props.desc}
		</Text>
	</Flex>
)