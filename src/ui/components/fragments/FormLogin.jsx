import InputForm from '../elements/Input';
import Button from '../elements/Button';
import Swal from 'sweetalert2';
import { login } from '../../../services/auth.service';

const FormLogin = () => {
	const handleLogin = (e) => {
		e.preventDefault();

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
		};

		const res = login(data);
		if (res.success) {
			Swal.fire({
				title: res.message,
				icon: 'success',
			}).then(() => {
				window.location.href = '/';
			});
		} else {
			Swal.fire({
				title: res.message,
				icon: 'error',
			});
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<InputForm
				label="Username"
				name="username"
				type="text"
				placeholder="username"
			></InputForm>
			<InputForm
				label="Password"
				name="password"
				type="password"
				placeholder="********"
			></InputForm>
			<Button type="submit" className=" w-full">
				Login
			</Button>
		</form>
	);
};

export default FormLogin;
