import React from 'react'
import { injectableElement } from '..'

/**
 * Greeter props
 */
interface Props {
  /**
   * The name of the <noun> you wish to greet
   */
  name: string
}

/**
 * A super simple greeter component
 * @param props properties
 */
const Greeter: React.FC<Props> = (props: Props) => {
  return <h1>{`Hello, ${props.name}`}</h1>
}

export default injectableElement(Greeter)
