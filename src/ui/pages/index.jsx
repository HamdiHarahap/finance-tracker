import Button from '../components/elements/Button';
import Balance from '../components/fragments/Balance';
import MainLayout from '../layouts';
import { logout } from '../../services/auth.service';
import Swal from 'sweetalert2';
import useLogin from '../../hooks/useLogin';
import Transaction from '../components/fragments/Transaction';

const HomePage = () => {
	const username = useLogin();

	const handleLogout = () => {
		Swal.fire({
			title: 'Kamu ingin logout?',
			text: 'Kamu akan keluar dari sistem ini!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ya, logout',
		}).then((result) => {
			if (result.isConfirmed) {
				const res = logout();
				if (res.success) {
					Swal.fire({
						title: res.message,
						icon: 'success',
					}).then(() => {
						window.location.href = '/login';
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

	return (
		<MainLayout>
			<div className="space-y-6">
				<section className="bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex justify-between items-center">
					<div>
						<h3 className="text-lg font-semibold text-slate-800">
							Hello, {username}
						</h3>
						<p className="text-gray-500 text-sm">Atur keuanganmu di sini</p>
					</div>
					<Button variant="logout" onClick={handleLogout}>
						<img src="/assets/logout.svg" alt="" className="w-5" />
					</Button>
				</section>
				<Balance />
			</div>
			<div className="my-6">
				<Transaction />
			</div>
		</MainLayout>
	);
};

export default HomePage;
