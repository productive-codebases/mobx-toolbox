import { EnvironmentBase } from '..'

describe('Environment', () => {
  it('should allow passing a configuration', () => {
    const environmentConfiguration = {
      string: 'Hello',
      number: 42,
      fun: () => "I'm a function",
      obj: {
        foo: 'bar'
      }
    }

    const environment = new EnvironmentBase(environmentConfiguration)

    expect(environment.configuration).toBe(environmentConfiguration)
  })
})
