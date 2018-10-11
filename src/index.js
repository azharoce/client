import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './design-table/vendor/bootstrap/css/bootstrap.min.css';
import './design-table/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './design-table/vendor/animate/animate.css';
import './design-table/vendor/select2/select2.min.css';
import './design-table/vendor/perfect-scrollbar/perfect-scrollbar.css';
import './design-table/css/util.css';
import './design-table/css/main.css';

import Edit from './components/customers/edit/edit';
import Create from './components/customers/create/create';
import Show from './components/customers/show/show';
import App from './App';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();