import { useState, useRef, useEffect } from 'react'
import { Flex, Grid, Text, Link } from './system'
import { C, Section, Layout } from './bridge'
import { LiItem } from './RegulationEls'

const Regulation = props => {

	const RowItemList = C.Regulation.map(item => {

		const [open, setOpen] = useState(false)
		const [height, setHeight] = useState('')
		const ref = useRef(null)
		
		const toggleBullets = () => {
			setOpen(!open)
			setHeight(open === false ? '0px' : `${ref.currentScrollHeight}px`)
		}
		useEffect(toggleBullets, [ref])

		return (
			<Layout
				key={item.id}
				gridColumn='1/-1'
			>
				<Grid
					gridColumn={{ min: '1/-1', sm: '1/7' }}
					ps='ysm'
					sx={{
						borderBottom: '1px solid',
						borderRight: '1px solid',
						borderColor: 'blacks.0',
						':last-child': {
							borderBottom: '0px',
						}
					}}
					gridTemplateColumns={{
						min: 'repeat(12, 1fr)',
						sm: 'repeat(6, 1fr)',
					}}
				>
				<Flex
					gridColumn={{ min: '1/-1', sm: '1/6', lg: '1/4' }}
					flexes='css'
				>
					<Text variant='s3' pb={2} ps='xsm'>{item.rowTitle}</Text>
					<Text variant='s3' color='blacks.3' ps='xsm'>{item.rowDesc}</Text>
						<br />
						<Link
							mt={3}
							ms='xsm'
							link='underline'
							onClick={toggleBullets}
							sx={{
								display: ['flex', 'flex', 'none']
								}}
						>
							Learn more
						</Link>
				</Flex>
					
				</Grid>

				<Flex as='ul'
					ref={ref}
					overflow='hidden'
					flexes={{ min: 'css', sm: 'rss' }}
					gridColumn={{ min: '1/-1', sm: '7/-1' }}
					maxHeight={{ min: height, sm: '100%' }}
					bg={{ min: 'accent', sm: 'inherit' }}
				>
					{item.children.map(bullet =>
						<LiItem
							key={bullet.id}
							liTitle={bullet.liTitle}
							liDesc={bullet.liDesc}
						/>
					)}
				</Flex>
			</Layout>
		)
	})

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