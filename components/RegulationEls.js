import { Flex, Grid, Text, Image } from './system'

import { Layout } from './Layout'

const LiItem = props => 
	<Flex as='li'
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
		<Text variant='s3' pb={1}>{props.liTitle}</Text>
		<Text variant='s3' color='blacks.3'>{props.liDesc}</Text>
	</Flex>

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
		>
			<Text variant='s3' pb={2}>{props.rowTitle}</Text>
			<Text variant='s3' color='blacks.3' alignSelf='end'>{props.rowDesc}</Text>
			
		</Grid>

		<Flex as='ul'
			flexes='rss'
			gridColumn='7/-1'
			height='100%'
		>
			<LiItem
				liTitle={props.liTitle01}
				liDesc={props.liDesc01}
			/>
			<LiItem
				liTitle={props.liTitle02}
				liDesc={props.liDesc02}
			/>
			<LiItem
				liTitle={props.liTitle03}
				liDesc={props.liDesc03}
			/>
		</Flex>
	</Layout>