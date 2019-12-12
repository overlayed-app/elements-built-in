jest.unmock('react')

import React from 'react'
import { injectableElement } from '..'

const emulateOldReactVersion = '0.1.0'

describe('injectableElement', () => {
  it('fails when react version is not a match', () => {
    const injectorFn = injectableElement({} as any)

    expect(() => {
      injectorFn({} as any, emulateOldReactVersion)
    }).toThrowError("Unsupported React version: '0.1.0'. Supported range: '^16.12.0'.")
  })

  it('fails when react is unshimmed', () => {
    console.log((React as any).__sideloadFrom)
    const injectorFn = injectableElement({} as any)

    expect(() => {
      injectorFn(React, React.version)
    }).toThrowError('Element references real React, not writable.')
  })
})
