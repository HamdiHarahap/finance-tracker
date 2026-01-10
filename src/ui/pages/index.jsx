import Button from '../components/elements/Button';
import Balance from '../components/fragments/Balance';
import MainLayout from '../layouts';
import { logout } from '../../services/auth.service';
import Swal from 'sweetalert2';
import useLogin from '../../hooks/useLogin';

const HomePage = () => {
	const username = useLogin();

	const handleLogout = () => {
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
						Logout
					</Button>
				</section>
				<Balance />
			</div>
		</MainLayout>
	);
};

export default HomePage;
