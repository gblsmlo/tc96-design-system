import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
	args: {
		onClick: fn(),
	},
	component: Avatar,
	tags: ['autodocs'],
	title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Avatar>
			<AvatarImage alt="@shadcn" src="https://github.com/gabrielmelo.png" />
			<AvatarFallback>GM</AvatarFallback>
		</Avatar>
	),
}
