import { Flex, Grid, Text, Image } from './system'
import { C, Section } from './bridge'
import { RowItem } from './RegulationEls'

const Regulation = props => {

	const RowItemList = C.Regulation.map(item =>
		<RowItem
			rowTitle={item.rowTitle}
			rowDesc={item.rowDesc}
			liTitle01={item.children[0].liTitle}
			liDesc01={item.children[0].liDesc}
			liTitle02={item.children[1].liTitle}
			liDesc02={item.children[1].liDesc}
			liTitle03={item.children[2].liTitle}
			liDesc03={item.children[2].liDesc}
		/>
	)

	return (
	<Section heading='Content Regulation'>

			{RowItemList}

	</Section>
	)
}

export default Regulation