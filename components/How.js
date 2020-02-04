import { useRef, useState } from 'react'
import { Flex, Text, Link } from './system'
import { C, Section } from './bridge'
import { Fig01, Fig02 } from './Figures.js'
import { Tab } from './HowEls.js'


const Utilities = props => {
	const [activeTab, setActiveTab] = useState('Fig1')
	const handleTabs = (e) => setActiveTab(e.target.name)
	
	return (
	<Section heading='How'>

		<Flex as='ul'
			gridColumn='1/7'
			py={6}
			px={4}
			flexes='css'
		>
			<Text as='li' variant='s2' pb={3}>
				{C.How.steps[0].id}<br/>
				{C.How.steps[0].desc}
			</Text>
			<Text as='li' variant='s2'>
				{C.How.steps[1].id}<br/>
				{C.How.steps[1].desc}
			</Text>
		</Flex>

		<Flex as='aside'
			gridColumn='7/-1'
			height='800px'
			flexes='ccc'
			bg='accent'
		>
			<Flex flexes='ccc' flexGrow='1' width='100%'>
				{activeTab === 'Fig1' && <Fig01 />}
				{activeTab === 'Fig2' && <Fig02 />}
			</Flex>
			
			<Flex
				flexes='css'
				width='100%'
				p={4}
			>
				<Tab
					name='Fig1'
					activeTab={activeTab}
					onChange={handleTabs}
					mb={1}
				>
					{C.How.figs[0].id}: {C.How.figs[0].desc}
				</Tab>
				<Tab
					name='Fig2'
					activeTab={activeTab}
					onChange={handleTabs}
				>
					{C.How.figs[1].id}: {C.How.figs[1].desc}
				</Tab>
			</Flex>
		</Flex>

	</Section>
	)
}

export default Utilities