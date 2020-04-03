import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from '../src/store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'));