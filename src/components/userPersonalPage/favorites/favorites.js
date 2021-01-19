import React from 'react';
import style from './favorites.module.css'
import FavItem from './favItem/favItem';

const Favorites = () => {
  return (
      <div className={style.wrapper}>
        <h2>Избранное {}</h2>
        <div className={style.content}>
          <FavItem designer={'designer'} productTitle={'test'} price={'5000'}/>
        </div>
      </div>
  );
};

export default Favorites;