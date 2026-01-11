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
