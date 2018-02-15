// 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom'

// const PORT = process.env.PORT || 8080;

// App.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

ReactDOM.render(  <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
