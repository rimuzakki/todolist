import * as ActionTypes from './ActionTypes'

export const addNote = (note) => ({
  type: ActionTypes.ADD_NOTE,
  payload: note
})