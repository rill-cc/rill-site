import { Flex, Input, Button } from './system'

export const Signup = props =>
	<Flex
		width='100%'
		flexes='rcc'
		variant='text.s3'
		sx={{
			border: '1px solid',
      borderColor: 'blacks.1',
		}}
		{...props}
	>
		<Input flexGrow='1' placeholder='Enter email' />
		<Button width='fit-content' px={3}>Sign up</Button>
	</Flex>