import { action } from 'mobx'

export type HandleFunction<TEvent> = (event?: TEvent) => void

export type HandlerCreator<TEvent = Event> = (
  handler: HandleFunction<TEvent>
) => ReturnType<typeof action>
