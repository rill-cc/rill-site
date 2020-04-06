import React from 'react'
import { Flex, Input, Box } from './system'

const Button = props => (
	<Box
		as='input'
		px={{ min: 2, sm: 3 }}
		py={3}
		{...props}
		sx={{
			appearance: 'none',
			display: 'inline-block',
			textAlign: 'center',
			lineHeight: 'inherit',
			textTransform: 'uppercase',
			textDecoration: 'none',
			fontSize: 'inherit',
			color: 'inherit',
			bg: 'inherit',
			border: 0,
			borderRadius: 0,
		}}
	/>
)

export const Signup = props => {
	return (
		<Flex
			width='100%'
			flexes='rsc'
			variant='text.s3'
			sx={{
				border: '1px solid',
				borderColor: 'blacks.1',
			}}
			{...props}
		>
			<Flex
				as='form'
				width='100%'
				flexes='rss'
				action='https://rill.us19.list-manage.com/subscribe/post'
				method='POST'
			>
				<Input
					type='hidden'
					name='u'
					defaultValue='674875605b0352c7d30f06785'
				/>
				<Input type='hidden' name='id' defaultValue='f79a7d6e40' />
				<Input
					type='email'
					autocapitalize='off'
					autocorrect='off'
					name='MERGE0'
					id='MERGE0'
					size='25'
					deafultValue=''
					placeholder='Get updates'
					px={{ min: 2, sm: 3 }}
					flexGrow='1'
				/>
				<Button type='submit' name='signup' defaultValue='Sign up' />
			</Flex>
		</Flex>
	)
}
