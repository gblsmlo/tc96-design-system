import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const button = canvas.getByRole('button', { name: 'Default' })

		await expect(button).toHaveAttribute('data-slot', 'button')
		await expect(button).toHaveTextContent('Default')
		await expect(button).not.toBeDisabled()
		await expect(button).toHaveStyle({ height: '40px' })
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Outline' })

		await expect(button).toHaveClass(/border/)
		await expect(button).toHaveClass(/bg-transparent/)

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledTimes(1)
	},
}

export const Destructive: Story = {
	args: {
		children: 'Destructive',
		variant: 'destructive',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Destructive' })

		await expect(button).toHaveClass(/bg-destructive/)

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledTimes(1)
	},
}

export const Ghost: Story = {
	args: {
		children: 'Ghost',
		variant: 'ghost',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Ghost' })

		await expect(button).toHaveClass(/hover:bg-accent/)

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledTimes(1)
	},
}

export const Link: Story = {
	args: {
		children: 'Link',
		variant: 'link',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Link' })

		await expect(button).toHaveClass(/underline-offset-4/)

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalled()
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

		await expect(button).toHaveClass(/disabled:bg-slate-300/)
		await expect(button).toHaveClass(/disabled:text-slate-500/)
	},
}

// Size Variants
export const Small: Story = {
	args: {
		children: 'Small Button',
		size: 'sm',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Small Button' })

		await expect(button).toHaveClass(/h-8/)
		await expect(button).toHaveClass(/rounded-md/)
		await expect(button).not.toBeDisabled()
	},
}

export const Base: Story = {
	args: {
		children: 'Base Button',
		size: 'base',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Base Button' })

		await expect(button).toHaveClass(/h-10/)
		await expect(button).not.toBeDisabled()
	},
}

export const Large: Story = {
	args: {
		children: 'Large Button',
		size: 'lg',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Large Button' })

		await expect(button).toHaveClass(/h-12/)
		await expect(button).toHaveClass(/rounded-md/)
		await expect(button).not.toBeDisabled()
	},
}

export const Icon: Story = {
	args: {
		'aria-label': 'Icon button',
		children: '⚡︎',
		size: 'icon',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Icon button' })

		await expect(button).toHaveClass(/size-9/)

		await expect(button).toHaveAttribute('aria-label', 'Icon button')
		await expect(button).not.toBeDisabled()
	},
}
