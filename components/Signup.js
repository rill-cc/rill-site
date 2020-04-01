import { Flex, Input, Button } from './system'

export const Signup = props =>
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
		<Input
			flexGrow='1'
			px={{ min: 2, sm: 3 }}
			placeholder='Get updates'
		/>
		<Button
			width='fit-content'
		>
			Sign up
		</Button>
	</Flex>