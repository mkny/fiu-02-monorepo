import React from 'react'
import {render} from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  test('render', () => {
    const defaultProps = {}
    const { getByText } = render(<App {...defaultProps} />)

    expect(getByText(/hello/i)).toBeInTheDocument()
  })
})
