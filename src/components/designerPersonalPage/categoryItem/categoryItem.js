import React from 'react';
import style from './categoryItem.module.css'

const CategoryItem = ({title, icon}) => {

  const cls = []
  if(title === 'Действие') {
    cls.push(style.hide)
  }
  return (
      <li className={cls.join(' ')}>
        {title}
        {icon ? <span>&nbsp; &#x2193;</span> : null}
      </li>
  );
};

export default CategoryItem;