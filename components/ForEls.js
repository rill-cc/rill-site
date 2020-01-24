import React, { useRef, useState, useEffect } from 'react'
import { Flex, Text, Link } from './system'
import { C } from './bridge'

// Create text block
const LiItem = props =>
	<Flex
		width={1/4}
		flexes='css'
		p={{all: 4}}
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

// Pull copy for researcher
export const ResearcherC = C.For.researcher.map(item =>
	<LiItem key={item.id}>
		<Text variant='s3' pb={{all: 8}}>{item.title}</Text>
		<Text variant='s3' color='blacks.3'>{item.desc}</Text>
	</LiItem>
)

// Pull copy for activist
export const ActivistC = C.For.activist.map(item =>
	<LiItem key={item.id}>
		<Text variant='s3' pb={{all: 8}}>{item.title}</Text>
		<Text variant='s3' color='blacks.3'>{item.desc}</Text>
	</LiItem>
)

// Pull copy for observer
export const ObserverC = C.For.observer.map(item =>
	<LiItem key={item.id}>
		<Text variant='s3' pb={{all: 8}}>{item.title}</Text>
		<Text variant='s3' color='blacks.3'>{item.desc}</Text>
	</LiItem>
)

// Make tab switch
export const Tab = props =>
	<Link
		onClick={props.handleTabs}
		name={props.name}
		variant='s1' decor='caps'
		link={props.state === props.name ? 'underline' : null}
	>
	{props.name}
</Link>