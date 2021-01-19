import React from 'react'

export const ProductListHeader = () => {
  return (
      <div className="product_list__header">
        <img src={require('../../../../assets/img/product_list_head.png')} alt="Одежда, которая подойдет только вам" className="product_list__head_image"/>
        <div className="product_list__cart">
          <h1 className="product_list__cart__title">
            Корзина
          </h1>
          <div className="product_list__cart__bottom">
            <div className="product_list__cart__bottom__mount">
              <p>
                Общая сумма
              </p>
              <p>
                0 <span className="rub">P</span>
              </p>
            </div>
            <div className="button button_black">Заказать</div>
          </div>
        </div>
      </div>
  )
}