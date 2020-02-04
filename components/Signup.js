import { Flex, Input, Button } from './system'

export const Signup = props =>
	<Flex
		width='100%'
		flexes='rcc'
		sx={{
			border: '1px solid',
      borderColor: 'blacks.1',
		}}
	>
		<Input flexGrow='1' placeholder='Enter email' />
		<Button width='fit-content' px={3}>Sign up</Button>
	</Flex>