import { Flex, Grid, Text, Image } from './system'
import { C, Section } from './bridge'
import { RowItem } from './RegulationEls'

const Regulation = props => {

	const RowItemList = C.Regulation.map(item =>
		<RowItem
			key={item.id}
			rowTitle={item.rowTitle}
			rowDesc={item.rowDesc}
			liTitle01={item.children[0].liTitle}
			liDesc01={item.children[0].liDesc}
			id01={item.children[0].id}
			liTitle02={item.children[1].liTitle}
			liDesc02={item.children[1].liDesc}
			id02={item.children[1].id}
			liTitle03={item.children[2].liTitle}
			liDesc03={item.children[2].liDesc}
			id03={item.children[2].id}
		/>
	)

	return (
	<Section heading='Content Regulation'>

			{RowItemList}

	</Section>
	)
}

export default Regulation