import React from 'react';
import CheckBox from '../../../../../fields/CheckBox';
import style from './statusCart.module.css'

const labels = [
  {label: 'Ограничение приема заказов', id: 1},
  {label: 'Высокая загруженностьв', id: 2},
  {label: 'Средняя загруженность', id: 3},
  {label: 'Низкая загруженность', id: 4},
];

const StatusCart = () => {

  const renderCheckBoxes = () => {
    return labels.map((item, index) => {
      return (
            <CheckBox
                margin_left={'13px'}
                label_size={16}
                label={item.label}
                id={item.id}
                key={index}
            />
      );
    });
  };

  return (
      <div className={style.row}>
        {renderCheckBoxes()}
      </div>
  );
};

export default StatusCart;