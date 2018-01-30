import { UPDATE_APP } from '../actions/app'

const initialState = {
  requestId: null,
  apiUrl: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_APP:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
