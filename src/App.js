import React from "react";
import "./assets/styles/App.scss";
import { Route, Link } from "react-router-dom";
import { Index } from "./components/main";
import DesignerPage from "./components/designerPersonalPage/designerPage";
import { UserForm } from "./components/auth/childs/UserForm";
import { RegGroupChanger } from "./components/auth/childs/RegGroupChanger";
import { SignUn } from "./components/auth/SignUp";
import UserPage from "./components/userPersonalPage/userPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/designer">Designer</Link>
        <Link to="/user">User</Link>
        <Link to="/anonimus">Anonimus</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/designer">
        <DesignerPage />
      </Route>
      <Route exact path="/">
        <SignUn />
      </Route>
      <Route exact path="/">
        <UserPage />
      </Route>
    </>
  );
}

export default App;
