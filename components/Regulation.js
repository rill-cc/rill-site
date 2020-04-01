import { C, Section } from './bridge'
import { RowItem } from './RegulationEls'

const Regulation = props => {
	
	const RowItemList = C.Regulation.map((item, key) =>
		<RowItem
			key={key}
			id={item.id}
			rowTitle={item.rowTitle}
			rowDesc={item.rowDesc}
			children={item.children}
		/>
	)

	return (
	<Section
		heading='Content Regulation'
		keepOpen={false}
	>
		{RowItemList}
	</Section>
	)
}

export default Regulation