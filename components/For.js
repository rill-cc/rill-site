import React, { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'

const For = props => {

	const [activeTab, setActiveTab] = useState('Researcher')

	const handleTabs = (e) => {
		if (e.target.name === 'Researcher') {setActiveTab('Researcher')}
		if (e.target.name === 'Activist') {setActiveTab('Activist')}
		if (e.target.name === 'Observer') {setActiveTab('Observer')}
	}

	return (
		<Flex>
			<Layout>

				<Grid
					gridColumn='1/5'
					py={6}
					px={4}
				>
					<Text variant='s1' decor='caps'>For</Text>
				</Grid>

				<Grid gridColumn='5/12'>
					<Flex flexes='rbc'>
						<Link
							onClick={handleTabs}
							name='Researcher'
							variant='s1' decor='caps'
							link={activeTab === 'Researcher' ? 'underline' : null}>
							Researcher
						</Link>
						<Link
							onClick={handleTabs}
							name='Activist'
							variant='s1' decor='caps'
							link={activeTab === 'Activist' ? 'underline' : null}>
							Activist
						</Link>
						<Link
							onClick={handleTabs}
							name='Observer'
							variant='s1' decor='caps'
							link={activeTab === 'Observer' ? 'underline' : null}>
							Observer
						</Link>
					</Flex>
				</Grid>

			</Layout>

			<Layout>
				
			</Layout>
		</Flex>
		)
}

export default For