// import React from 'react';
// import { createRoot } from 'react-dom/client';

// // styles
// import './index.scss';

// // projct import
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ConfigProvider } from './contexts/ConfigContext';

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <ConfigProvider>
//     <App />
//   </ConfigProvider>
// );

// reportWebVitals();

//bharti

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// styles
import './index.scss';

// project imports
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from './contexts/ConfigContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ConfigProvider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </ConfigProvider>
);

reportWebVitals();
