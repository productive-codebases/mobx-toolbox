import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SayHelloA from './SayHelloA'
import SayHelloB from './SayHelloB'
import { ToolboxAComponents, toolboxAConfiguration } from './toolboxA'
import { ToolboxBComponents, toolboxBConfiguration } from './toolboxB'

describe('<Container />', () => {
  it('should expose toolbox A in the context', async () => {
    const Component = (
      <ToolboxAComponents.MobxToolboxProvider
        configuration={toolboxAConfiguration}
      >
        <SayHelloA />
      </ToolboxAComponents.MobxToolboxProvider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloA')).toHaveTextContent('StoreRootA')
  })

  it('should expose toolbox B in the context', async () => {
    const Component = (
      <ToolboxBComponents.MobxToolboxProvider
        configuration={toolboxBConfiguration}
      >
        <SayHelloB />
      </ToolboxBComponents.MobxToolboxProvider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloB')).toHaveTextContent('StoreRootB')
  })

  // Not supported yet
  it.skip('should expose both toolboxes in contextes', async () => {
    const Component = (
      <ToolboxAComponents.MobxToolboxProvider
        configuration={toolboxAConfiguration}
      >
        <ToolboxBComponents.MobxToolboxProvider
          configuration={toolboxBConfiguration}
        >
          <SayHelloA />
          <SayHelloB />
        </ToolboxBComponents.MobxToolboxProvider>
      </ToolboxAComponents.MobxToolboxProvider>
    )

    render(Component)

    screen.debug()

    expect(screen.getByTestId('SayHelloA')).toHaveTextContent('StoreRootA')
    expect(screen.getByTestId('SayHelloB')).toHaveTextContent('StoreRootB')
  })
})
