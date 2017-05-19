import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Hello from './main';
import newb from './newb';
import Hellok from './Hellok';
const BasicExample = () => (
  <Router>
    <div>
<div>
<a href = "/">shou ye</a>
<a href = "/aa">my aa</a>
<a href = "/bb">I am bb</a>
<ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/aa">aa</Link></li>
        <li><Link to="/bb">bb</Link></li>
      </ul>

      <hr/>

</div>

      <Route exact path="/" component={newb}/>
      <Route path="/aa" component={Hellok}/>
      <Route path="/bb" component={Hello}/>
    </div>
  </Router>
)


//export default BasicExample

ReactDOM.render(
  <BasicExample />
, document.getElementById('root'));