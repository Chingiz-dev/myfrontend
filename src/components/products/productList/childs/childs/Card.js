import React from 'react'

export const Card = ({data}) => {
  return (
      <div className="product_list__items__card" >
        <img src={require(`../../../../../assets/temp_images/${data.image}.png`)} alt="card_image" className="product_list__items__card__img"/>
        <p className="product_list__items__card__title">{data.title}</p>
        <p className="product_list__items__card__description">{data.disigner}</p>
        <p className="product_list__items__card__price">{data.price} <span className='rub'>P</span></p>
        <div className="button button_black">Купить</div>
      </div>
  )
}