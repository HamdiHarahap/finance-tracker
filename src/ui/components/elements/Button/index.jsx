const Button = (props) => {
	const {
		children,
		variant = 'primary',
		onClick = () => {},
		type = 'button',
		className,
		disabled = false,
	} = props;

	const variants = {
		primary:
			'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition',
		secondary:
			'bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition',
		logout:
			'bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition',
		none: '',
	};

	return (
		<button
			className={`${variants[variant]} cursor-pointer ${className}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
