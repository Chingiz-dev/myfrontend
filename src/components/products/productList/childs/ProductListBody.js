import React from 'react'
import {Filter} from './childs/Filter';
import {List} from './childs/List';

export const ProductListBody = () => {
  return (
      <div className='productListBody'>
          <Filter/>
          <div>
            <List title='Новая коллекция'/>
            <List title='Распродажа'/>
          </div>

      </div>
  )
}