import Axios from 'axios';
import {
  SUCCESS_FETCH_CLOTHES,
  SUCCESS_FETCH_COLLECTION,
  SUCCESS_FETCH_MATERIALS,
  SUCCESS_FETCH_SEASONS,
} from './actionTypes';

export function fetchMaterials() {
  return async dispatch => {
    const url = 'https://fitforyou-back.herokuapp.com/api/products/materials'
    try{
      const responce = await Axios.get(url)
      const data = Array.from(responce.data)
      dispatch(successFetchMaterials(data))
    }catch (e) {
      console.log(e);
    }
  }
}

export function successFetchMaterials(materials) {
  return{
    type: SUCCESS_FETCH_MATERIALS,
    materials
  }
}

export function fetchCollections() {
  return async dispatch => {
    const url = 'https://fitforyou-back.herokuapp.com/api/products/collections'
    try{
      const response = await Axios.get(url)
      const data = Array.from(response.data)
      dispatch(successFetchCollection(data))
    }catch (e) {
      console.log(e);
    }
  }
}

export function successFetchCollection(collection) {
  return{
    type: SUCCESS_FETCH_COLLECTION,
    collection
  }
}

export function fetchSeasons() {
  return async dispatch => {
    const url = 'https://fitforyou-back.herokuapp.com/api/products/seasons'
    try{
      const response = await Axios.get(url)
      const data = Array.from(response.data)
      dispatch(successFetchSeasons(data))
    }catch (e) {
      console.log(e);
    }
  }
}

export function successFetchSeasons(seasons) {
  return{
    type: SUCCESS_FETCH_SEASONS,
    seasons
  }
}

export function fetchClothes() {
  return async dispatch => {
    const url = 'https://fitforyou-back.herokuapp.com/api/products/clothes'
    try{
      const response = await Axios.get(url)
      const data = Array.from(response.data)
      dispatch(successFetchClothes(data))
    }catch (e) {
      console.log(e);
    }
  }
}

export function successFetchClothes(clothes) {
  return{
    type: SUCCESS_FETCH_CLOTHES,
    clothes
  }
}