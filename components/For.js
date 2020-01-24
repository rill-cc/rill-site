import React, { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { Layout } from './bridge'
import { Tab, ResearcherC, ActivistC, ObserverC } from './ForEls'

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
					<Tab handleTabs={handleTabs} state={activeTab} name='Researcher' />
					<Tab handleTabs={handleTabs} state={activeTab} name='Activist' />
					<Tab handleTabs={handleTabs} state={activeTab} name='Observer' />
				</Flex>
			</Grid>

		</Layout>
		{activeTab === 'Researcher' && ResearcherC}
		{activeTab === 'Activist' && ActivistC}
		{activeTab === 'Observer' && ObserverC}
	</Flex>
	)
}

export default For