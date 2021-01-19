import React from 'react'
import {Card} from './Card';

export const List = ({title}) => {
  let data = [
      {title: 'Пальто', image: 'card_image_1', disigner: 'Александр Маккуин', price: '5999'},
      {title: 'Пиджак', image: 'card_image_2', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Пиджак', image: 'card_image_3', disigner: 'Александр Маккуин', price: '4999'},
      {title: 'Кофта', image: 'card_image_4', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Куртка', image: 'card_image_5', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Платье', image: 'card_image_6', disigner: 'Александр Маккуин', price: '2999'},
      {title: 'Пальто', image: 'card_image_1', disigner: 'Александр Маккуин', price: '5999'},
      {title: 'Пиджак', image: 'card_image_2', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Пиджак', image: 'card_image_3', disigner: 'Александр Маккуин', price: '4999'},
      {title: 'Кофта', image: 'card_image_4', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Куртка', image: 'card_image_5', disigner: 'Александр Маккуин', price: '3999'},
      {title: 'Платье', image: 'card_image_6', disigner: 'Александр Маккуин', price: '2999'},
      ]
  return (
      <div className='product_list__items'>
        <h1 className='product_list__items__title'>{title}</h1>
        <div className="product_list__items__wrapper">
          {data.map((val, key)=> {
            return <Card key={Date.now() + val.title + key} data={val}/>
          })}
        </div>
      </div>
  )
}