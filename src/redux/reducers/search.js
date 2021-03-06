import { UPDATE_SEARCH_FILTER, UPDATE_SEARCH_VALUE } from 'redux/actions/searchActions'

const initialState = {
  filterBy: '',
  value: ''
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_FILTER:
      return { ...state, filterBy: action.payload.toLowerCase() }
    case UPDATE_SEARCH_VALUE:
      return { ...state, value: action.payload.toLowerCase() }
    default:
      return state
  }
}
