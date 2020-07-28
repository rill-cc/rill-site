import React from 'react'
import { Link } from './system'

export const Tab = props => (
	<Link
		name={props.name}
		onClick={props.onChange}
		link={props.activeTab === props.name ? 'underline' : null}
		variant='s4'
		{...props}
	/>
)
