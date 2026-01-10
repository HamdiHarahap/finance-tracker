import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './ui/pages/index.jsx';
import AuthPage from './ui/pages/auth.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <AuthPage type="login" title="Login" />,
	},
	{
		path: '/register',
		element: <AuthPage type="register" title="Register" />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
