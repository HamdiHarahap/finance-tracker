import { useEffect, useState } from 'react';
import {
	getTransaction,
	deleteTransaction,
} from '../../../services/transaction.service';
import Button from '../elements/Button';
import Action from './Action';
import Swal from 'sweetalert2';

const Transaction = () => {
	const [data, setData] = useState([]);
	const [showAction, setShowAction] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemPerPage = 5;

	const lastIndex = currentPage * itemPerPage;
	const firstIndex = lastIndex - itemPerPage;
	const currentData = data.slice(firstIndex, lastIndex);
	const totalPages = Math.ceil(data.length / itemPerPage);

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Kamu ingin hapus ini?',
			text: 'Kamu akan menghapus data dari sistem ini!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ya, hapus',
		}).then((result) => {
			if (result.isConfirmed) {
				const res = deleteTransaction(id);
				if (res.success) {
					Swal.fire({
						title: res.message,
						icon: 'success',
					});
				} else {
					Swal.fire({
						title: res.message,
						icon: 'error',
					});
				}
			}
		});
	};

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

			<div className="overflow-x-auto flex flex-col">
				<table className="w-full table-fixed border-collapse text-sm">
					<thead>
						<tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
							<th className="w-[110px] text-left py-3 px-4">Tanggal</th>
							<th className="w-[110px] text-left py-3 px-4">Keterangan</th>
							<th className="w-[110px] text-left py-3 px-4">Deskripsi</th>
							<th className="w-[110px] text-left py-3 px-4">Jumlah</th>
							<th className="w-[110px] text-center py-3 px-4">Jenis</th>
							<th className="w-[60px]"></th>
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
							currentData.map((item, index) => (
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
										className={`py-3 px-4 text-left font-semibold ${
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
									<td className="py-3 px-4 text-center relative">
										<Button
											variant="none"
											className="hover:border-slate-300 hover:bg-slate-200 p-1 rounded-lg transition"
											onClick={() =>
												setShowAction(showAction === index ? null : index)
											}
										>
											<img src="/assets/menu.svg" alt="" className="w-4" />
										</Button>

										{showAction === index && (
											<div className="absolute -left-12 mt-2 z-50">
												<Action
													item={item}
													handleDelete={() => handleDelete(item.id)}
												/>
											</div>
										)}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
			<div className="flex items-center gap-3 mt-5 ml-auto">
				<Button
					onClick={() => setCurrentPage((prev) => prev - 1)}
					disabled={currentPage === 1}
					variant="none"
					className={`border px-2 py-1 rounded-lg transition ${
						currentPage === 1
							? 'border-slate-200 text-slate-300 cursor-not-allowed'
							: 'border-slate-300 hover:bg-slate-200'
					}`}
				>
					<img src="/assets/arrow-left.svg" alt="" className="w-6" />
				</Button>
				<span className="text-sm text-slate-600">
					Page {currentPage} of {totalPages}
				</span>
				<Button
					onClick={() => setCurrentPage((prev) => prev + 1)}
					disabled={currentPage === totalPages}
					variant="none"
					className={`border px-2 py-1 rounded-lg transition ${
						currentPage === totalPages
							? 'border-slate-200 text-slate-300 cursor-not-allowed'
							: 'border-slate-300 hover:bg-slate-200'
					}`}
				>
					<img src="/assets/arrow-right.svg" alt="" className="w-6" />
				</Button>
			</div>
		</div>
	);
};

export default Transaction;
