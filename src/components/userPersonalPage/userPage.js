import React from 'react';
import style from './userPage.module.css';
import NavBar from './navBar/navBar';
import Footer from '../navigation/footer/footer';
import {Switch, Route} from 'react-router-dom';
import WrapMenu from './wrapMenu/wrapMenu';
import Basket from './basket/basket';

const UserPage = () => {
  return (
      <div className={style.userPage}>
        <NavBar/>
        <Switch>
          <div className={style.mainContent}>
            <Route exact path={'/basket'} component={Basket}/>
            <Route path={'/userPage'} component={WrapMenu}/>
          </div>
        </Switch>
        <Footer/>
      </div>
  );
};

export default UserPage;