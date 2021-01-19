import React from 'react';
import style from './link.module.css'

const Link = ({title}) => {
  return (
      <li className={style.link}>
        {title}
      </li>
  );
};

export default Link;