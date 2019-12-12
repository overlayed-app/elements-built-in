import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Greeter from '../Greeter'

test('renders', () => {
  const { getByRole } = render(
    React.createElement(Greeter(React, React.version), { name: 'world' })
  )
  const textElement = getByRole('heading')
  expect(textElement).toBeInTheDocument()
  expect(textElement).toHaveTextContent('Hello, world')
})
