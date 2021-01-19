import React from 'react';
import style from './search.module.css'

const Search = ({placeholder}) => {
  return (
      <div className={style.search}>
        <img className={style.searchIcon} src={require('../../assets/img/search.svg')}/>
        <input placeholder={placeholder} className={style.inputSearch} type={'text'}/>
      </div>
  );
};

export default Search;