import React from 'react';
import style from './designerPage.module.css';
import NavBar from './navigation/navBar/nav-bar';
import MainContent from './main/mainContent/mainContent';
import Footer from '../navigation/footer/footer';
import {Switch, Route} from 'react-router-dom';
import ListOfProducts from './listOfProducts/listOfProducts';
import FinanceManagement from './finance/financePage';
import ContexCardModile
  from './listOfProducts/contexCardModile/contexCardModile';
import Orders from './dispatchManagement/dispatchManagement';
import AccountSettings from './accountSettings/accountSettings';

const DesignerPage = () => {
  return (
      <div className={style.main}>
        <div>
          <NavBar/>
        </div>

        <Switch>
        <div className={style.mainContent}>
            <Route path={'/account'} component={AccountSettings}/>
            <Route exact path={'/main'} component={MainContent}/>
            <Route exact path={'/orders'} component={Orders}/>
            <Route exact path={'/addProductMobile'} component={ContexCardModile}/>
            <Route exact path={'/listOfProducts'} component={ListOfProducts}/>
            <Route exact path={'/finance'} component={FinanceManagement}/>
        </div>
        </Switch>

        <div>
          <Footer/>
        </div>
      </div>
  );
};

export default DesignerPage;