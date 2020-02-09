import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import flexes from './flexes'
import { paddings, margins } from './gaps'

const breakpoints = [
	'24rem',	// 1: 384
	'48em',		// 2: 768
	'64em',		// 3: 1024
	'80em',		// 4: 1280
	'90em',		// 5: 1440
]
breakpoints.min	= '0rem'
breakpoints.xsm	= breakpoints[0]
breakpoints.sm	= breakpoints[1]
breakpoints.md	= breakpoints[2]
breakpoints.lg	= breakpoints[3]
breakpoints.xlg	= breakpoints[4]

const space = [
	0,
	'0.5rem',	// 1: 8
	'1rem',		// 2: 16
	'1.5rem',	// 3: 24
	'2rem',		// 4: 32
	'3rem',		// 5: 48
	'4rem',		// 6: 64
	'5rem',		// 7: 80
	'6rem',		// 8: 96
	'7rem',		// 9: 112
	'8rem',		// 10: 128
]

const colors = {
	transparent: 'rgba(0,0,0,.0)',
	black: '#000',
	blacks: [
		'rgba(0,0,0,.04)',
		'rgba(0,0,0,.16)',
		'rgba(0,0,0,.32)',
		'rgba(0,0,0,.56)',
		'rgba(0,0,0,.80)',
		],
	white: '#FFF',
	whites: [
		'rgba(255,255,255,.16)',
		'rgba(255,255,255,.32)',
		'rgba(255,255,255,.56)',
	],
	accent: '#F7FAFF',
}

const fonts = 'Helvetica Neue, -system, Sans-Serif'
const fontSizes = [
	'.75rem',		// 0: 12
	'1rem',			// 1: 16
	'1.25rem',	// 2: 20
	'1.5rem',		// 3: 24
	'2rem',			// 4: 32
]
const lineHeights = '1.25'

const text = {
	s1: {
		fontSize: [2, null, null, null, 4],
		lineHeight: lineHeights,
		color: 'blacks.4',
	},
	s2: {
		fontSize: [2, null, 3],
		lineHeight: lineHeights,
		color: 'blacks.4',
	},
	s3: {
		fontSize: 1,
		lineHeight: lineHeights,
		color: 'blacks.4',
	},
	s4: {
		fontSize: 0,
		lineHeight: lineHeights,
		color: 'blacks.4',
	},
}

const styling = {
	caps: {
		textTransform: 'uppercase'
	},
}

const links = {
	underline: {
		borderBottom: '1px solid',
		borderColor: 'blacks.2',
	},
}

const variants = {
	flexes,
	paddings,
	margins,
}

const theme = {
	breakpoints,
	space,
	colors,
	fonts,
	fontSizes,
	lineHeights,
	text,
	variants,
	flexes,
	paddings,
	margins,
	styling,
	links,
}

const Global = injectGlobal`

	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  border: none;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-size: 16px;
	  font-weight: normal;
	  font-family: ${fonts};
	  -webkit-text-size-adjust: 100%;
	}

	input,
	optgroup,
	select,
	textarea {
	  font-family: inherit;
	  font-size: 100%;
	  margin: 0;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	  -webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
	  border-style: none;
	  padding: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		border-bottom: 1px solid ${colors.transparent};
	}

	h1, h2, h3, h4, p, a, span {
		font-family: inherit;
		font-weight: normal;
		font-size: inherit;
		font-weight: inherit;
	}

	li {
		list-style: none;
	}
`


export const Theme = ({children}) => {
	return (
		<ThemeProvider theme={theme}>
			<>
			{Global}
			{children}
			</>
		</ThemeProvider>
	)
}
