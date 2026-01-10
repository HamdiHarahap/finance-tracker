const Input = (props) => {
	const { type = 'text', placeholder, name } = props;

	return (
		<input
			id={name}
			type={type}
			className="text-sm border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline-blue-500"
			placeholder={placeholder}
			name={name}
			min={1}
		/>
	);
};

export default Input;
