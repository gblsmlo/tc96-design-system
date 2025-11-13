import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react-vite'

import '@/styles/index.css'

const preview: Preview = {
	parameters: {
		layout: 'centered',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withThemeByClassName<ReactRenderer>({
			themes: {
				light: '',
				dark: 'dark',
			},
			defaultTheme: 'dark',
		}),
	],
}

export default preview
