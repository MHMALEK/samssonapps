import {
    ADD_USER
} from './ActionTypes';

export const addUserStoreAction = content => ({
    type: ADD_USER,
    payload: {
      id: 1,
      content
    }
  })