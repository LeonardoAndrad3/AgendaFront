import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './styled.js'
import './styles/Global/index.css' 
import App from './pages/agenda/index';

import "./styles/themes/default/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);

