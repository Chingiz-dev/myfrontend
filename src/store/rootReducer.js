import {combineReducers} from 'redux'
import productReducer
  from './designerPersonalPageStore/reducers/productReducer';
import addProductReducer
  from './designerPersonalPageStore/reducers/addProductReducer';

export default combineReducers({
  productReducer,
  materialReducer: addProductReducer
})