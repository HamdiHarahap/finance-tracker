export const getTransaction = () => {
	const data = JSON.parse(localStorage.getItem('user'));
	const transactions = data?.transactions || [];

	const sortedTransactions = [...transactions].sort(
		(a, b) => new Date(b.tanggal) - new Date(a.tanggal)
	);

	return sortedTransactions;
};

export const addTransaction = (data) => {
	const { jumlah, keterangan, tanggal, jenis, deskripsi } = data;

	const dataUser = JSON.parse(localStorage.getItem('user'));

	const newTransaction = {
		id: Date.now(),
		jumlah,
		keterangan,
		tanggal,
		jenis,
		deskripsi,
	};

	const oldTransactions = dataUser.transactions;

	let balance = dataUser.balance;

	if (jenis === 'pemasukan') {
		balance += jumlah;
	} else {
		balance -= jumlah;
	}

	const updatedUser = {
		...dataUser,
		transactions: [...oldTransactions, newTransaction],
		balance,
	};

	localStorage.setItem('user', JSON.stringify(updatedUser));
	window.dispatchEvent(new Event('transactionUpdated'));

	return {
		success: true,
		message: 'Berhasil menambah transaksi',
	};
};
export const deleteTransaction = (id) => {
	const dataUser = JSON.parse(localStorage.getItem('user'));
	const oldTransactions = dataUser.transactions || [];
	const transactionToDelete = oldTransactions.find((item) => item.id === id);

	if (!transactionToDelete) {
		return { success: false, message: 'Transaksi tidak ditemukan' };
	}

	let balance = dataUser.balance;

	if (transactionToDelete.jenis === 'pemasukan') {
		balance -= transactionToDelete.jumlah;
	} else {
		balance += transactionToDelete.jumlah;
	}

	const newTransactions = oldTransactions.filter((item) => item.id !== id);
	const updatedUser = {
		...dataUser,
		transactions: newTransactions,
		balance,
	};

	localStorage.setItem('user', JSON.stringify(updatedUser));
	window.dispatchEvent(new Event('transactionUpdated'));

	return {
		success: true,
		message: 'Transaksi berhasil dihapus',
	};
};
