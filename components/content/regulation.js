export const Regulation = [
	{
		id: '1',
		rowTitle: 'Levels of access',
		rowDesc: 'The platform provides different levels of access to content editing.',
		children: [
			{
				id: '1',
				liTitle: 'L I',
				liDesc: 'Faculty, students, and employees of companies that have confirmed scientific or research background. They can create nodes and connections.',
			},
			{
				id: '2',
				liTitle: 'L II',
				liDesc: 'Employees of organizations engaged in public campaigns or art. They can start and contribute to discussions.',
			},
			{
				id: '3',
				liTitle: 'L III',
				liDesc: 'Observers without experience in science or research. They can search and subscribe for updates.',
			},
		]
	},
	{
		id: '2',
		rowTitle: 'Registration process',
		rowDesc: 'To get access to L1, the user needs to register with their work email of a collaborating organization (e.g, name@org.edu). To get access to L2, the user needs to submit a registration form that will be approved by current members or moderators.',
		children: [
			{
				id: '1',
				liTitle: '',
				liDesc: '',
			},
			{
				id: '2',
				liTitle: '',
				liDesc: '',
			},
			{
				id: '3',
				liTitle: '',
				liDesc: '',
			},
		]
	},
	{
		id: '3',
		rowTitle: 'Node requirements',
		rowDesc: 'In order to create a node, it needs to meet the following requirements. Global or vague events should be divided into several smaller nodes.',
		children: [
			{
				id: '1',
				liTitle: 'R I',
				liDesc: 'The event must have documented evidence, such as official research papers, agency reports, datasets, etc.',
			},
			{
				id: '2',
				liTitle: 'R II',
				liDesc: 'The event does not describe a global event and can be geolocated.',
			},
			{
				id: '3',
				liTitle: 'R III',
				liDesc: 'The researcher needs to work in the field where the node belongs to.',
			},
		]
	},
	{
		id: '4',
		rowTitle: 'Connection reviews',
		rowDesc: 'The connection can be discussed and reviewed by peers to which connected nodes belong. Connections include a status system.',
		children: [
			{
				id: '1',
				liTitle: 'C I',
				liDesc: 'Requested, not reviewed',
			},
			{
				id: '2',
				liTitle: 'C II',
				liDesc: 'Set, approved by n experts',
			},
			{
				id: '3',
				liTitle: 'C III',
				liDesc: 'On review',
			},
		]
	},
]