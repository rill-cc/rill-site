import { Flex, Grid, Text, Image } from './system'

import { Layout } from './Layout'

const LiItem = props => 
	<Grid as='li'
		width='33.33%'
		height='100%'
		p={3}
		sx={{
			flexGrow: '1',
			flexFlow: 'column',
			borderBottom: '1px solid',
			borderRight: '1px solid',
			borderColor: 'blacks.0',
		}}
	>
		<Text
			variant='s3' pb={1}>{props.liTitle}</Text>
		<Text variant='s3' color='blacks.3'>{props.liDesc}</Text>
	</Grid>

export const RowItem = props =>
	<Layout gridColumn='1/-1'>
		<Grid
			gridColumn='1/7'
			p={3}
			sx={{
				borderBottom: '1px solid',
				borderRight: '1px solid',
				borderColor: 'blacks.0',
			}}
			gridTemplateColumns='repeat(6, 1fr)'
		>
			<Text
				variant='s3'
				pb={2}
				gridColumn='1/4'
			>
				{props.rowTitle}
			</Text>
			<Text
				variant='s3'
				gridColumn='1/4'
				color='blacks.3' alignSelf='end'
			>
				{props.rowDesc}
			</Text>
			
		</Grid>

		<Flex as='ul'
			flexes='rss'
			gridColumn='7/-1'
			height='100%'
		>
			<LiItem
				key={props.id01}
				liTitle={props.liTitle01}
				liDesc={props.liDesc01}
			/>
			<LiItem
				key={props.id02}
				liTitle={props.liTitle02}
				liDesc={props.liDesc02}
			/>
			<LiItem
				key={props.id03}
				liTitle={props.liTitle03}
				liDesc={props.liDesc03}
			/>
		</Flex>
	</Layout>