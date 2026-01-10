import { useEffect } from 'react';

const useLogin = () => {
	const user = localStorage.getItem('user');

	const userParsed = user ? JSON.parse(user) : null;

	useEffect(() => {
		if (!userParsed || !userParsed.isLoggedIn) {
			window.location.href = '/login';
		}
	});

	return userParsed?.username || '';
};

export default useLogin;
