import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import flexes from './flexes'

const breakpoints = ['40em', '64em', '80em', '90em', '100em']
breakpoints.sm	= breakpoints[0] // 640-1023
breakpoints.md	= breakpoints[1] // 1024-1279
breakpoints.lg	= breakpoints[2] // 1280-1439
breakpoints.xlg	= breakpoints[3] // 1440+

const space = [
	0,
	'0.5rem',	// 1: 8px
	'1rem',		// 2: 16px
	'1.5rem',	// 3: 24px
	'2rem',		// 4: 32px
	'3rem',		// 5: 48px
	'4rem',		// 6: 64px
	'5rem',		// 7: 80px
	'6rem',		// 8: 96px
	'7rem',		// 9: 112px
	'8rem',		// 10: 128px
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

const fonts = {
	sans: 'Helvetica Neue, Sans-Serif',
}

const text = {
	s1: {
		fontSize: '2rem',
		lineHeight: 1.25,
		color: 'blacks.4',
	},
	s2: {
		fontSize: '1.5rem',
		lineHeight: 1.25,
		color: 'blacks.4',
	},
	s3: {
		fontSize: '1rem',
		lineHeight: 1.25,
		color: 'blacks.4',
	},
	s4: {
		fontSize: '.75rem',
		lineHeight: 1.25,
		color: 'blacks.4',
	},
}

const styling = {
	caps: { textTransform: 'uppercase' },
}

const links = {
	underline: {
		borderBottom: '1px solid',
		borderColor: 'blacks.2',
	},
}

const variants = {
	flexes,
}

const theme = {
	breakpoints,
	space,
	colors,
	fonts,
	text,
	variants,
	flexes,
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
	  font-family: ${fonts.sans};
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
