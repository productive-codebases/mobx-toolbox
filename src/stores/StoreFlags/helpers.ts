import StoreFlags from '.'
import { ensureArray } from '@productive-codebases/toolbox'
import { IFlags } from './types'

/**
 * Useful to use when debugging loading state.
 */
export const devFlagsLoading: IFlags = {
  flags: true,
  isLoading: true,
  isError: false,
  isForbidden: false
}

/**
 * Merge flags.
 * Useful when the global status depends of multiple flags of multiple stores.
 */
export function mergeFlags(...flags: IFlags[]): IFlags {
  const defaultFlags: IFlags = {
    flags: true,
    isLoading: false,
    isError: false,
    isForbidden: false
  }

  return flags.reduce<IFlags>((acc, flag) => {
    return {
      flags: true,
      isLoading: acc.isLoading || flag.isLoading,
      isError: acc.isError || flag.isError,
      isForbidden: acc.isForbidden || flag.isForbidden
    }
  }, defaultFlags)
}

/**
 * Merge store flags.
 * Useful when the global status depends of multiple flags of multiple stores.
 */
export function mergeStoreFlags(
  storesFlags: StoreFlags<any> | StoreFlags<any>[],
  overriddenFlags?: Partial<IFlags>
): IFlags {
  const defaultFlags: IFlags = {
    flags: true,
    isLoading: false,
    isError: false,
    isForbidden: false
  }

  const reducedFlags = ensureArray(storesFlags).reduce<IFlags>(
    (acc, storeFlags) => {
      return {
        flags: true,
        isLoading: acc.isLoading || storeFlags.isLoading,
        isError: acc.isError || storeFlags.isError,
        isForbidden: acc.isForbidden || storeFlags.isForbidden
      }
    },
    defaultFlags
  )

  if (!overriddenFlags) {
    return reducedFlags
  }

  return {
    ...reducedFlags,
    ...overriddenFlags
  }
}
