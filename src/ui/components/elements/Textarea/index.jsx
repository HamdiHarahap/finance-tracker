import Textarea from './Textarea';
import Label from '../Input/Label';

const TextareaForm = (props) => {
	const { name, placeholder, label } = props;
	return (
		<div className="mb-3">
			<Label htmlFor={name}>{label}</Label>
			<Textarea name={name} placeholder={placeholder} />
		</div>
	);
};

export default TextareaForm;
