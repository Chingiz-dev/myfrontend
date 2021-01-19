import React from 'react';
import { useLocation } from 'react-router-dom';
export const Logo = ({black}) => {
  let location = useLocation();
  return (
      location.pathname === '/' || black ?
          <img className='main_logo' src={require('../../../../assets/img/main_logo.svg')} alt=""/> :
          <img className='main_logo' src={require('../../../../assets/img/main_logo_black.svg')} alt=""/>

  );
}