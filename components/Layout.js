import React, { forwardRef } from 'react'
import { Grid } from './system'

export const Layout = forwardRef((props, ref) => (
	<Grid
		ref={ref}
		width='100%'
		maxHeight={props.maxHeight}
		overflow='hidden'
		gridTemplateColumns={`repeat(${props.columns}, 1fr)`}
		{...props}
	/>
))

Layout.defaultProps = {
	gridTemplateColumns: 'repeat(12, 1fr)',
}
