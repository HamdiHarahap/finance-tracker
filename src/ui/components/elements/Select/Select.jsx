const Select = (props) => {
	const { name, options = [] } = props;

	return (
		<select
			name={name}
			id={name}
			className="text-sm border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 outline-blue-500"
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
