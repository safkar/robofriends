import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import {Knicks} from './robots';


import * as serviceWorker from './serviceWorker';
import 'tachyons';
ReactDOM.render(
			<CardList Knicks={Knicks}/>
			,document.getElementById('root'));


serviceWorker.unregister();
 