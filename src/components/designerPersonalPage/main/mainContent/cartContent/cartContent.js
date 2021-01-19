import React from 'react';
import Row from './row/row';
import style from './cartContent.module.css';

const CartContent = ({rows}) => {

  const renderRows = () => {
    return rows.map((item, index) => {
      return (
          <Row
              title={item.title}
              value={item.value}
              key={index}
          />
      );
    });
  };

  return (
      <div>
        <ul className={style.content}>
          {renderRows()}
        </ul>
      </div>
  );
};

export default CartContent;