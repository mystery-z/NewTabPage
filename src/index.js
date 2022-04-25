import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';





function re_render() {
  ReactDOM.render( <App />, document.getElementById('root') );
}

window.onload = re_render();





reportWebVitals();
