import React from 'react'
import '../../assets/styles/App.scss'
import {Header} from './childs/Header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {ProductList} from '../products/productList/ProductList';
import {SignIn} from '../auth/SignIn';
import {SignUn} from '../auth/SignUp';
import {Footer} from './childs/Footer';
import {ContentIndexPage} from './childs/ContentIndexPage';

export const Index = () => {
  return (
      <Router>
      <div className='main_index'>
        <Header/>
        <div className="middle">
          <Switch>
            <Route path="/home">
              <ContentIndexPage />
            </Route>
            <Route path="/contacts">
              <ProductList />
            </Route>
            <Route path="/news">
              <ProductList />
            </Route>
            <Route path="/catalog">
              <ProductList />
            </Route>
            <Route path="/favorite">
              <ProductList />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUn />
            </Route>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>

        <Footer/>
      </div>

      </Router>
  );
}


