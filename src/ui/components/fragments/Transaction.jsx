import { useEffect, useState } from 'react';
import { getTransaction } from '../../../services/transaction.service';

const Transaction = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const load = () => {
			setData(getTransaction());
		};

		load();
		window.addEventListener('transactionUpdated', load);
		return () => window.removeEventListener('transactionUpdated', load);
	}, []);

	return (
		<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
			<h1 className="text-lg font-semibold text-slate-800 mb-6">
				Riwayat Transaksi
			</h1>

			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-slate-200 text-gray-500">
							<th className="text-left py-3 px-4">Tanggal</th>
							<th className="text-left py-3 px-4">Keterangan</th>
							<th className="text-left py-3 px-4">Deskripsi</th>
							<th className="text-right py-3 px-4">Jumlah</th>
							<th className="text-center py-3 px-4">Jenis</th>
						</tr>
					</thead>
					<tbody>
						{data.length === 0 ? (
							<tr>
								<td colSpan="5" className="text-center text-gray-500 py-10">
									Belum ada transaksi
								</td>
							</tr>
						) : (
							data.map((item, index) => (
								<tr
									key={index}
									className="border-b border-slate-100 hover:bg-slate-50 transition"
								>
									<td className="py-3 px-4 text-slate-600">
										{new Date(item.tanggal).toLocaleDateString('id-ID', {
											day: '2-digit',
											month: 'short',
											year: 'numeric',
										})}
									</td>

									<td className="py-3 px-4 font-medium text-slate-800">
										{item.keterangan || '-'}
									</td>

									<td className="py-3 px-4 text-gray-500">
										{item.deskripsi || '-'}
									</td>

									<td
										className={`py-3 px-4 text-right font-semibold ${
											item.jenis === 'pemasukan'
												? 'text-green-600'
												: 'text-red-500'
										}`}
									>
										{item.jenis === 'pemasukan' ? '+' : '-'}
										{item.jumlah.toLocaleString('id-ID', {
											style: 'currency',
											currency: 'IDR',
											minimumFractionDigits: 0,
										})}
									</td>

									<td className="py-3 px-4 text-center">
										<span
											className={`px-3 py-1 text-xs rounded-full ${
												item.jenis === 'pemasukan'
													? 'bg-green-100 text-green-700'
													: 'bg-red-100 text-red-700'
											}`}
										>
											{item.jenis}
										</span>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Transaction;
