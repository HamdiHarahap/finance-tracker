import { Link } from 'react-router-dom';

const Auth = ({ children, title, type }) => {
	return (
		<div className="min-h-screen bg-[#f4f4f9] flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
				<div className="mb-6 text-center">
					<h1 className="text-2xl font-bold text-slate-800">{title}</h1>
					<p className="text-sm text-gray-500 mt-1">
						Silakan masukkan data akun Anda
					</p>
				</div>
				<div className="space-y-4">{children}</div>
				<div className="mt-6 text-center text-sm text-gray-600">
					{type === 'login' ? (
						<p>
							Belum punya akun?{' '}
							<Link
								to="/register"
								className="text-blue-600 font-semibold hover:text-blue-800"
							>
								Daftar sekarang
							</Link>
						</p>
					) : (
						<p>
							Sudah punya akun?{' '}
							<Link
								to="/login"
								className="text-blue-600 font-semibold hover:text-blue-800"
							>
								Masuk
							</Link>
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Auth;
