import Axios from 'axios';

export function addProduct(product) {
  return async dispatch => {
    try{
      let url = 'https://fitforyou-back.herokuapp.com/api/products'
      const response = await Axios.post(url, product)
    }catch (e) {
      console.log(e);
    }
  }
}