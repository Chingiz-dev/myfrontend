import React from 'react';
import {Route, Switch} from 'react-router-dom';
import style from './wrapMenu.module.css'
import Menu from '../menu/menu';
import Main from '../main/main';
import Orders from '../orders/orders';
import Favorites from '../favorites/favorites';
import PersonalData from '../personalData/personalData';

const WrapMenu = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.menuWrap}>
          <Menu/>
        </div>
        <Switch>
          <Route exact path={'/userPage/main'} component={Main}/>
          <Route path={'/userPage/orders'} component={Orders}/>
          <Route path={'/userPage/favorites'} component={Favorites}/>
          <Route path={'/userPage/favorites'} component={Favorites}/>
          <Route path={'/userPage/personalData'} component={PersonalData}/>
        </Switch>
      </div>
  );
};

export default WrapMenu;