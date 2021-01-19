import React from 'react';
import { FaSearch } from "react-icons/fa";
export const Search = ({color}) => {
  return (
      <div className={`header__middle__search ${color}`}>
        <FaSearch/>
        <input type="text" placeholder={'Поиск'}/>
      </div>
  );
}