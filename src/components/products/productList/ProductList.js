import React from 'react';
import {ProductListHeader} from './childs/ProductListHeader';
import {ProductListBody} from './childs/ProductListBody';

export const ProductList = () => {

  return(
      <div className='product_list'>
        <ProductListHeader/>
        <ProductListBody/>

      </div>
  )
}