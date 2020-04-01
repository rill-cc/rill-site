import React, { useRef, useState, useEffect } from 'react'
import { Flex, Text, Link } from './system'
import { C } from './bridge'

// Create text block
const LiItem = props =>
	<Flex
		width={{all: 1/2, sm: 1/4}}
		flexes='cbs'
		ps='sm'
		sx={{
			borderBottom: '1px solid',
			borderTop: '1px solid',
			borderRight: '1px solid',
			borderColor: 'blacks.0',
			':last-child': {
				borderRight: '0px',
			}
		}}
		{...props}
	/>

const List = ({items}) => items.map(item =>
	<LiItem key={item.id}>
		<Text variant='s3' pb={{ min: 5, md: 9 }}>{item.title}</Text>
		<Text variant='s3' color='blacks.3'>{item.desc}</Text>
	</LiItem>
	)

export const ResearchersC = () => <List items={C.For.researchers} />
export const ActivistsC = () => <List items={C.For.activists} />
export const ObserversC = () => <List items={C.For.observers} />

// Make tab switch
export const Tab = props =>
	<Link
		onClick={props.handleTabs}
		name={props.name}
		variant='s1'
		styling='caps'
		link={props.state === props.name ? 'underline' : null}
		mr={{min: 4, lg: 0}}
		mb={{min: 1, sm: 0}}
		sx={{
			':last-child': {
				mr: 0,
				mb: 0,
			},
		}}
	>
	{props.name}
</Link>