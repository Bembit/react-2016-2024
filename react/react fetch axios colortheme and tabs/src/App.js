import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './components/NotFoundPage';
import routes from './helpers/routes';
import './styles/Main.css';

const App = () => {

	const routeResults = useRoutes(routes);

	return routeResults || <NotFoundPage />
  
}

export default App;