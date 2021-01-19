import React from 'react';
import style from './link.module.css'
import {NavLink} from 'react-router-dom';

const Link = ({title, img, url}) => {
  return (
      <li>
        <NavLink to={`${url}`}>
        <div className={style.link}>
          <img src={img}/>
          <span className={style.title}>
          {title}
          </span>
        </div>
        </NavLink>
      </li>
  );
};

export default Link;