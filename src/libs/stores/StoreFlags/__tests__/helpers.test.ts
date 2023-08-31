import { mergeFlags } from '../helpers'
import { IFlags } from '../types'

describe('mergeFlags', () => {
  it('should merge falsy flags', () => {
    const flags1: IFlags = {
      flags: true,
      isLoading: false,
      isError: false,
      isForbidden: false
    }

    const flags2: IFlags = {
      flags: true,
      isLoading: false,
      isError: false,
      isForbidden: false
    }

    expect(mergeFlags([flags1, flags2])).toEqual({
      flags: true,
      isLoading: false,
      isError: false,
      isForbidden: false
    })
  })

  it('should merge truthy flags', () => {
    const flags1: IFlags = {
      flags: true,
      isLoading: true,
      isError: true,
      isForbidden: true
    }

    const flags2: IFlags = {
      flags: true,
      isLoading: true,
      isError: true,
      isForbidden: true
    }

    expect(mergeFlags([flags1, flags2])).toEqual({
      flags: true,
      isLoading: true,
      isError: true,
      isForbidden: true
    })
  })

  it('should merge mixed flags', () => {
    const flags1: IFlags = {
      flags: true,
      isLoading: false,
      isError: false,
      isForbidden: false
    }

    const flags2: IFlags = {
      flags: true,
      isLoading: true,
      isError: true,
      isForbidden: true
    }

    expect(mergeFlags([flags1, flags2])).toEqual({
      flags: true,
      isLoading: true,
      isError: true,
      isForbidden: true
    })
  })
})
