import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from '@storybook/test'

const meta = {
	args: { onClick: fn() },
	component: Button,
	tags: ['autodocs'],
	title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'solid',
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
}

export const Destructive: Story = {
	args: {
		children: 'Destructive',
		variant: 'destructive',
	},
}

export const Ghost: Story = {
	args: {
		children: 'Ghost',
		variant: 'ghost',
	},
}

export const Link: Story = {
	args: {
		children: 'Link',
		variant: 'link',
	},
}

export const Disabled: Story = {
	args: {
		'aria-disabled': 'true',
		children: 'Disabled',
		disabled: true,
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const button = canvas.getByRole('button')

		await expect(button).toBeDisabled()
		await expect(button).toHaveAttribute('disabled')
		await expect(button).toHaveAttribute('aria-disabled', 'true')
	},
}
