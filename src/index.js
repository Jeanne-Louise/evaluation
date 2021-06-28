import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movies from './movies.js';
import contenu from './shows.json'

ReactDOM.render(
  <React.StrictMode>
    <Movies contenu = {contenu}/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

