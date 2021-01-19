import React from 'react';
import style from './row.module.css'

const Row = ({title, value}) => {
  return (
      <li className={style.row}>
        <div>{title}</div>
        <div>{value}</div>
      </li>
  );
};

export default Row;