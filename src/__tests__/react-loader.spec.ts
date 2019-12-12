import reactLoader from '../react-loader'

// simulate what rollup will do - replacing react with react-loader
jest.mock('react', () => {
  return reactLoader
})

// now this import is react-loader
import react from 'react'

describe('react-loader', () => {
  it('works', () => {
    // allocate a "mock" of react. this emulates the case of a remote runtime
    // passing it's own react instance
    const remoteReact = {
      createElement: jest.fn(),
    }

    // do the sideload
    const loadableReact = react as any
    loadableReact.__sideloadFrom(remoteReact)

    // ensure that the react global now looks like the remoteReact module
    expect(react.createElement).toBe(remoteReact.createElement)
    expect(react.useState).toBe(undefined)
  })
})
