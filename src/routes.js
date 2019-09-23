import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import BootNav from './components/BootNav';
import Item from './components/Item';
import Home from './components/Home';
import Supplier from './components/supplier';


const Routes = (
  <Router>
    <BootNav />
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path='/item' component={Item}/>
      <Route exact path='/supplier' component={Supplier}/>
    </div>
  </Router>
);

export default Routes;
