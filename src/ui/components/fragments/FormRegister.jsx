import InputForm from '../elements/Input';
import Button from '../elements/Button';
import Swal from 'sweetalert2';
import { register } from '../../../services/auth.service';

const FormRegister = () => {
	const handleRegist = (e) => {
		e.preventDefault();

		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
			confirm: e.target.confirm.value,
		};

		const res = register(data);
		if (res.success) {
			Swal.fire({
				title: res.message,
				icon: 'success',
			}).then(() => {
				e.target.reset();
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
		<form onSubmit={handleRegist}>
			<InputForm
				label="Username"
				name="username"
				type="text"
				placeholder="Your username here..."
			/>
			<InputForm
				label="Password"
				name="password"
				type="password"
				placeholder="********"
			/>
			<InputForm
				label="Confirm Password"
				name="confirm"
				type="password"
				placeholder="********"
			/>
			<Button className=" w-full" type="submit">
				Register
			</Button>
		</form>
	);
};

export default FormRegister;
