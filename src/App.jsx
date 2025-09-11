import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// project-import
import renderRoutes, { routes } from './routes';

// ==============================|| APP ||============================== //

const App = () => {
  return <BrowserRouter basename={process.env.REACT_APP_BASE_NAME || '/'}>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
