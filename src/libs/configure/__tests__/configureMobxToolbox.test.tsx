import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SayHelloA from './SayHelloA'
import SayHelloB from './SayHelloB'
import SayHelloC from './SayHelloC'
import { ToolboxAComponents, toolboxAConfiguration } from './toolboxA'
import { ToolboxBComponents, toolboxBConfiguration } from './toolboxB'
import { ToolboxCComponents, toolboxCConfiguration } from './toolboxC'

describe('configure', () => {
  it('should expose toolbox A in the context A', async () => {
    const Component = (
      <ToolboxAComponents.Provider configuration={toolboxAConfiguration}>
        <SayHelloA />
      </ToolboxAComponents.Provider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloA')).toHaveTextContent('StoreRootA')
  })

  it('should expose toolbox B in the context B', async () => {
    const Component = (
      <ToolboxBComponents.Provider configuration={toolboxBConfiguration}>
        <SayHelloB />
      </ToolboxBComponents.Provider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloB')).toHaveTextContent('StoreRootB')
  })

  it('should expose toolbox C in the context C', async () => {
    const Component = (
      <ToolboxCComponents.Provider configuration={toolboxCConfiguration}>
        <SayHelloC />
      </ToolboxCComponents.Provider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloC')).toHaveTextContent('StoreRootC')
  })

  it('should expose all toolboxes when used in all contextes', async () => {
    const Component = (
      <ToolboxCComponents.Provider configuration={toolboxCConfiguration}>
        <ToolboxAComponents.Provider configuration={toolboxAConfiguration}>
          <ToolboxBComponents.Provider configuration={toolboxBConfiguration}>
            <SayHelloA />
            <SayHelloB />
            <SayHelloC />
          </ToolboxBComponents.Provider>
        </ToolboxAComponents.Provider>
      </ToolboxCComponents.Provider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloA')).toHaveTextContent('StoreRootA')
    expect(screen.getByTestId('SayHelloB')).toHaveTextContent('StoreRootB')
    expect(screen.getByTestId('SayHelloC')).toHaveTextContent('StoreRootC')
  })
})
