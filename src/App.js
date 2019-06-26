import React from 'react';
import './assets/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/todoList">TodoList</Link>
        <Link to="/getData">GetData</Link>
        <Link to="/life">Life</Link>
        <Link to="/news">News</Link>
        <Link to="/productList">ProductList</Link>
        <Link to="/antd">Antd</Link>
        <Link to="/chess">Chess</Link>
      </div>
      <hr/>
      {routes.map((route,key)=>{
        return (
          route.exact?<Route key={key} path={route.path} exact render={props=><route.component {...props} routes={route.routes} />}></Route>
          :<Route key={key} path={route.path} render={props=><route.component {...props} routes={route.routes} />}></Route>
        );
      })}
    </Router>
  );
}

export default App;
