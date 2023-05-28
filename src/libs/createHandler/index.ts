import { action } from 'mobx'
import { HandlerCreator } from './types'

/**
 * Create a handler function to handle behaviors bounded to events bindings.
 *
 * Usage:
 *
 */
export const createHandler: HandlerCreator = handler => {
  return action(handler)
}
