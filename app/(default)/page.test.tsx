import Home from '@/app/(default)/page'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('App Router: Works with Server Components', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Kameda Shunsukeについて🐢' })).toBeDefined()
})
