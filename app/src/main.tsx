import React from 'react';
import ReactDOM from 'react-dom';
import '@itgenio/gkit/dist/index.css';
import './stylesheets/index.less';
import { UikitDemo } from './pages/uikit';

ReactDOM.render(
  <React.StrictMode>
    <UikitDemo />
  </React.StrictMode>,
  document.getElementById('root')
);
