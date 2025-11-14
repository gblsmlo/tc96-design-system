# Input

A flexible input component with size variants and form validation states.

## Installation

```bash
pnpm add @tc96/ui-react
```

## Usage

```tsx
import { Input } from '@tc96/ui-react'

export function Example() {
  return <Input placeholder="Enter your name" />
}
```

## Sizes

The input component supports three size variants:

- **`sm`** - Small input (height: 32px, text: xs)
- **`base`** (default) - Base input (height: 40px, text: sm)
- **`lg`** - Large input (height: 48px, text: base)

### Examples

```tsx
<Input size="sm" placeholder="Small" />
<Input size="base" placeholder="Base" />
<Input size="lg" placeholder="Large" />
```

## Input Types

The component supports all standard HTML input types:

```tsx
<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="tel" placeholder="Phone number" />
<Input type="url" placeholder="Website URL" />
<Input type="search" placeholder="Search..." />
<Input type="date" />
```

## Disabled State

When the `disabled` prop is set to `true`, the input displays specific styling and prevents interaction:

- **Cursor**: `not-allowed`
- **Opacity**: `50%`
- **User interaction**: Disabled

### Example

```tsx
<Input disabled placeholder="Disabled input" />
<Input disabled value="Read-only value" />
```

## Invalid State

Use `aria-invalid="true"` to indicate validation errors:

- **Border color**: `destructive`
- **Ring color**: `destructive` on focus

### Example

```tsx
<Input
  aria-invalid="true"
  placeholder="Invalid email"
  type="email"
  value="invalid@"
/>
```

## With Form Labels

Always pair inputs with labels for accessibility:

```tsx
<div>
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>

{/* Or use aria-label for inline labeling */}
<Input aria-label="Search" type="search" placeholder="Search..." />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'base' \| 'lg'` | `'base'` | Input size variant |
| `type` | `string` | `'text'` | HTML input type |
| `disabled` | `boolean` | `false` | Disable the input |
| `aria-invalid` | `'true' \| 'false'` | - | Indicates validation error |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string \| number` | - | Controlled value |
| `onChange` | `function` | - | Change event handler |
| `className` | `string` | - | Additional CSS classes |

All standard HTML input attributes are also supported.

## Testing

The input component includes Storybook interaction tests that verify:
- Size variants render correctly
- Disabled state prevents input
- Invalid state styling
- User input and onChange events
- Different input types (email, password, number)

To run the tests:

```bash
pnpm dev  # Start Storybook and view the interaction tests
```

## Accessibility

- Uses semantic `<input>` element
- Supports `disabled` attribute for proper keyboard navigation
- Includes focus-visible ring for keyboard users
- Works with `aria-invalid` for error states
- Should be paired with `<label>` or `aria-label` for screen readers
- Maintains proper contrast ratios in all states
- `data-slot="input"` attribute for component identification

### Accessibility Example

```tsx
// ✅ Good - with label
<label htmlFor="username">Username</label>
<Input id="username" type="text" />

// ✅ Good - with aria-label
<Input aria-label="Search products" type="search" />

// ❌ Bad - no label
<Input placeholder="Username" />
```

## Form Integration

Works seamlessly with form libraries:

```tsx
import { Input } from '@tc96/ui-react'
import { useForm } from 'react-hook-form'

export function LoginForm() {
  const { register } = useForm()

  return (
    <form>
      <Input
        {...register('email')}
        type="email"
        placeholder="Email"
      />
      <Input
        {...register('password')}
        type="password"
        placeholder="Password"
      />
    </form>
  )
}
```
