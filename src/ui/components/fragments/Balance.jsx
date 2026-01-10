import Button from '../elements/Button';
import FormTransaction from './FormTransaction';
import { useState } from 'react';

const Balance = () => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-sm text-gray-500">Total Saldo</h1>
						<p className="text-2xl font-bold text-slate-800">Rp 300.000</p>
					</div>

					<Button onClick={handleShowForm}>Tambah Transaksi</Button>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
						<h2 className="text-sm text-gray-500">Total Pengeluaran</h2>
						<p className="text-2xl font-bold text-red-500">Rp 1.000.000</p>
					</div>

					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
						<h2 className="text-sm text-gray-500">Total Pemasukan</h2>
						<p className="text-2xl font-bold text-green-600">Rp 1.300.000</p>
					</div>
				</div>
			</div>

			{showForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={handleShowForm}
					/>
					<FormTransaction />
				</div>
			)}
		</>
	);
};

export default Balance;
