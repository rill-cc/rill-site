import React from 'react'
import { Link } from './system'

export const Tab = props => (
	<Link
		name={props.name}
		onClick={props.onChange}
		link={props.activeTab === props.name ? 'underline' : null}
		// color={props.activeTab === props.name ? null : 'blacks.3'}
		variant='s4'
		{...props}
	/>
)
