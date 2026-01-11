import Button from '../elements/Button';
import FormTransaction from './FormTransaction';
import { useState, useEffect } from 'react';

const Balance = () => {
	const [showForm, setShowForm] = useState(false);
	const [data, setData] = useState(() => {
		const saved = localStorage.getItem('user');
		return saved ? JSON.parse(saved) : { balance: 0, transactions: [] };
	});

	useEffect(() => {
		const load = () => {
			const saved = localStorage.getItem('user');
			setData(saved ? JSON.parse(saved) : { balance: 0, transactions: [] });
		};

		window.addEventListener('transactionUpdated', load);
		return () => window.removeEventListener('transactionUpdated', load);
	}, []);

	const saldo = data.balance;
	const transactions = data.transactions || [];

	const pemasukanTotal = transactions
		.filter((item) => item.jenis == 'pemasukan')
		.reduce((total, item) => total + item.jumlah, 0);

	const pengeluaranTotal = transactions
		.filter((item) => item.jenis == 'pengeluaran')
		.reduce((total, item) => total + item.jumlah, 0);

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-sm text-gray-500">Total Saldo</h1>
						<p className="text-2xl font-bold text-slate-800">
							{saldo.toLocaleString('id-ID', {
								style: 'currency',
								currency: 'IDR',
								minimumFractionDigits: 0,
							})}
						</p>
					</div>

					<Button onClick={handleShowForm} className="max-[520px]:hidden">
						Tambah Transaksi
					</Button>
				</div>

				<div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
						<h2 className="text-sm text-gray-500">Total Pengeluaran</h2>
						<p className="text-2xl font-bold text-red-500">
							{pengeluaranTotal.toLocaleString('id-ID', {
								style: 'currency',
								currency: 'IDR',
								minimumFractionDigits: 0,
							})}
						</p>
					</div>
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
						<h2 className="text-sm text-gray-500">Total Pemasukan</h2>
						<p className="text-2xl max-[520px]:text-xl font-bold text-green-600">
							{pemasukanTotal.toLocaleString('id-ID', {
								style: 'currency',
								currency: 'IDR',
								minimumFractionDigits: 0,
							})}
						</p>
					</div>
					<Button onClick={handleShowForm} className="min-[520px]:block">
						Tambah Transaksi
					</Button>
				</div>
			</div>

			{showForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={handleShowForm}
					/>
					<FormTransaction onClick={handleShowForm} />
				</div>
			)}
		</>
	);
};

export default Balance;
