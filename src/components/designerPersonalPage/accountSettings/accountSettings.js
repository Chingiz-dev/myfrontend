import React, {useState} from 'react';
import style from './accountSettings.module.css';
import Menu from './menu/menu';
import PersonalData from './personalData/personalData';
import {Switch, Route} from 'react-router-dom';
import Notifications from './notifications/notifications';
import Company from './company/company';
import Requisites from './requisites/requisites';

const AccountSettings = () => {

  return (
      <div className={style.accSett}>
        <div><h2>Управление аккаунтом</h2></div>
        <div className={style.content}>
          <Menu/>

          <div className={style.hideRightBLock}>
            <Switch>
              <Route path={'/account/data'} component={PersonalData}/>
              <Route path={'/account/notifications'} component={Notifications}/>
              <Route path={'/account/aboutCompany'} component={Company}/>
              <Route path={'/account/requisites'} component={Requisites}/>
            </Switch>
          </div>
          <div className={style.adaptiveContent}>
            <Switch>
              <Route path={'/account/data'} component={PersonalData}/>
              <Route path={'/account/notifications'} component={Notifications}/>
              <Route path={'/account/aboutCompany'} component={Company}/>
              <Route path={'/account/requisites'} component={Requisites}/>
            </Switch>
          </div>
        </div>
      </div>
  );
};

export default AccountSettings;