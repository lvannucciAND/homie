import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Page from 'routes/Page';
import './index.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Page />
    </div>  
  </BrowserRouter>
);

export default App;