import React, { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'

const For = props => {
	return (
		<Flex>
			<Layout>

				<Grid
					gridColumn='1/5'
					py={6}
					px={4}
				>
					<Text variant='s1' decoration='caps'>For</Text>
				</Grid>

				<Grid
					gridColumn='5/10'
					flexes='rbe'
				>
					<Link variant='s1' decoration='caps'>Researcher</Link>
					<Link variant='s1' decoration='caps'>Activist</Link>
					<Link variant='s1' decoration='caps'>Observer</Link>
				</Grid>

			</Layout>
		</Flex>
		)
}

export default For