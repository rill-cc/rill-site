import { useRef, useState, useEffect } from 'react'
import { Flex, Text, Link } from './system'
import { Layout } from './bridge'
import { Tab, ResearcherC, ActivistC, ObserverC } from './ForEls'

const For = props => {
	const [activeTab, setActiveTab] = useState('Researcher')
	const handleTabs = (e) => setActiveTab(e.target.name)

	return (
	<>
		
		<Layout as='section'
			flexes='rss'
			py={{all: 4, sm: 6}}
		>
			<Text
				gridColumn='1/4'
				px={4}
				variant='s1'
				styling='caps'
			>
				For
			</Text>
			<Flex
				gridColumn={{ min: '5/-1', md: '4/-1', lg: '4/10' }}
				flexes={{ min: 'css', sm: 'rsc', lg: 'rbc' }}
			>
				<Tab handleTabs={handleTabs} state={activeTab} name='Researcher' />
				<Tab handleTabs={handleTabs} state={activeTab} name='Activist' />
				<Tab handleTabs={handleTabs} state={activeTab} name='Observer' />
			</Flex>
		</Layout>

		<Flex>
			{activeTab === 'Researcher' && <ResearcherC />}
			{activeTab === 'Activist' && <ActivistC />}
			{activeTab === 'Observer' && <ObserverC />}
		</Flex>
	
	</>
	)
}

export default For