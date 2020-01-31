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
		<Input width='80%' placeholder='Enter email' />
		<Button width='20%'>Sign up</Button>
	</Flex>