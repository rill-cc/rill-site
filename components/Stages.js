import React, { useRef, useState, useEffect } from 'react'
import { Flex, Grid, Text } from './system'
import { C, Section } from './bridge'
import { IconTask } from './IconTask'

const Stages = props => {

	const StageItemList = C.Stages.map(item =>
		<React.Fragment key={item.id}>
			<Grid
				gridColumn='1/7'
				flexes='css'
				py={4}
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
				gridTemplateColumns='repeat(6, 1fr)'
			>
				<Flex gridColumn='1/4' flexes='css'>
					<Text
						variant='s3'
						pb={2}
						pl={4}
					>
						{item.title}
					</Text>
					<Text
						variant='s3'
						color='blacks.3'
						pl={4}
					>
						{item.desc}
					</Text>
				</Flex>
			</Grid>

			<Flex as='ul'
				gridColumn='7/-1'
				bg='accent'
				sx={{
					borderBottom: '1px solid',
					borderColor: 'blacks.0',
				}}
			>
				<Flex
					flexes='ccc'
					width='100%'
					py={10}
				>
					{item.tasks.map(task =>
						<Text as='li'
							key={task.id}
							variant='s2'
							color={task.completed ? 'blacks.2' : 'blacks.4'}
							pb={1}
							width='66.66%'
							sx={{ position: 'relative' }}
						>
							<IconTask completed={task.completed} />
							{task.desc}
						</Text>
						)}
					</Flex>
			</Flex>
		</React.Fragment>
	)

	return (
		<Section heading='Stages'>
			{StageItemList}
		</Section>
		)
}

export default Stages