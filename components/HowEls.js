import { Link } from './system'

export const Tab = props =>
	<Link
		name={props.name}
		onClick={props.onChange}
		link={props.activeTab === props.name ? null : 'underline'}
		color={props.activeTab === props.name ? 'blacks.3' : null}
		variant='s4'
		{...props}
	/>