import FormLogin from '../components/fragments/FormLogin';
import FormRegister from '../components/fragments/FormRegister';
import Auth from '../layouts/Auth';

const AuthPage = ({ type, title }) => {
	return (
		<Auth title={title} type={type}>
			{type === 'login' ? <FormLogin /> : <FormRegister />}
		</Auth>
	);
};

export default AuthPage;
