import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Appbar from './Components/Appbar';
import Login from './Components/Login';
import Register from './Components/Register';

ReactDOM.render(
	<Router>
		<Appbar/>
		<div>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route path="/" component={App} />
		</div>
	</Router>,
	document.getElementById('root')
);
