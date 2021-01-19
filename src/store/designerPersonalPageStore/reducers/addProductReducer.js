import {
  SUCCESS_FETCH_CLOTHES,
  SUCCESS_FETCH_COLLECTION,
  SUCCESS_FETCH_MATERIALS, SUCCESS_FETCH_SEASONS,
} from '../actions/actionTypes';

const initialState = {
  materials: [],
  collection: [],
  seasons: [],
  clothes: []
}

export default function addProductReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_FETCH_MATERIALS:
      return{
        ...state,
        materials: action.materials
      }
    case SUCCESS_FETCH_COLLECTION:
      return {
        ...state,
        collection: action.collection
      }
    case SUCCESS_FETCH_SEASONS:
      return {
        ...state,
        seasons: action.seasons
      }
    case SUCCESS_FETCH_CLOTHES:
      return {
        ...state,
        clothes: action.clothes
      }
    default:
      return state
  }
}