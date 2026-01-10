export const register = (data) => {
	const { username, password, confirm } = data;

	if (password !== confirm) {
		return {
			success: false,
			message: 'Password dan konfirmasi password tidak sesuai',
		};
	}

	const existingUser = JSON.parse(localStorage.getItem('user'));

	if (existingUser) {
		return {
			success: false,
			message: 'Akun sudah terdaftar. Silakan login.',
		};
	}

	const newUser = {
		username,
		password,
		balance: 0,
		transactions: [],
		isLoggedIn: false,
	};

	localStorage.setItem('user', JSON.stringify(newUser));

	return {
		success: true,
		message: 'Registrasi berhasil',
	};
};

export const login = (data) => {
	const { username, password } = data;

	const user = JSON.parse(localStorage.getItem('user'));

	if (user.username !== username || user.password !== password) {
		return {
			success: false,
			message: 'Username atau password salah',
		};
	}

	const updatedUser = { ...user, isLoggedIn: true };

	localStorage.setItem('user', JSON.stringify(updatedUser));
	return {
		success: true,
		message: 'Login berhasil',
	};
};

export const logout = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) {
		const updatedUser = { ...user, isLoggedIn: false };
		localStorage.setItem('user', JSON.stringify(updatedUser));
	}

	return {
		success: true,
		message: 'Logout berhasil',
	};
};
