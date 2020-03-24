import { C, Section } from './bridge'
import { RowItem } from './RegulationEls'

const Regulation = props => {
	
	const RowItemList = C.Regulation.map(item =>
		<RowItem
			id={item.id}
			rowTitle={item.rowTitle}
			rowDesc={item.rowDesc}
			children={item.children}
		/>
	)

	return (
	<Section
		heading='Content Regulation'
		keepOpen={true}
	>
		{RowItemList}
	</Section>
	)
}

export default Regulation