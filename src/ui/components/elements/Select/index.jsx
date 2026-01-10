import Select from './Select';
import Label from '../Input/Label';

const SelectForm = (props) => {
	const { label, name, options } = props;
	return (
		<div className="mb-3">
			<Label htmlFor={name}>{label}</Label>
			<Select name={name} options={options} />
		</div>
	);
};

export default SelectForm;
