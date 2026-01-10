const Textarea = (props) => {
	const { name, placeholder } = props;
	return (
		<div>
			<textarea
				name={name}
				id={name}
				placeholder={placeholder}
				className="text-sm border border-slate-300 rounded-md w-full py-2 px-3 text-slate-700 outline-blue-500"
			/>
		</div>
	);
};

export default Textarea;
