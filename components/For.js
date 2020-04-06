import { useState } from 'react'
import { Flex, Text } from './system'
import { Layout } from './bridge'
import { Tab, ResearchersC, ActivistsC, ObserversC } from './ForEls'

export default function For() {
	const [activeTab, setActiveTab] = useState('Researchers')
	const handleTabs = (e) => setActiveTab(e.target.name)

	return (
		<>
			<Layout as='section' flexes='rss' py={{ all: 4, sm: 6 }}>
				<Text gridColumn='1/4' ps='xsm' variant='s1' styling='caps'>
					For
				</Text>
				<Flex
					gridColumn={{ min: '5/-1', sm: '4/-1', md: '4/-1', lg: '4/10' }}
					flexes={{ min: 'css', sm: 'rsc', lg: 'rbc' }}
				>
					<Tab handleTabs={handleTabs} state={activeTab} name='Researchers' />
					<Tab handleTabs={handleTabs} state={activeTab} name='Activists' />
					<Tab handleTabs={handleTabs} state={activeTab} name='Observers' />
				</Flex>
			</Layout>

			<Flex>
				{activeTab === 'Researchers' && <ResearchersC />}
				{activeTab === 'Activists' && <ActivistsC />}
				{activeTab === 'Observers' && <ObserversC />}
			</Flex>
		</>
	)
}