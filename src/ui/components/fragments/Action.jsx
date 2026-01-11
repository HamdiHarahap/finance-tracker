import Button from '../elements/Button';
import Swal from 'sweetalert2';

const Action = (props) => {
	const { handleDelete } = props;

	return (
		<div className="flex-col flex w-24 p-1 bg-gray-100 rounded-xl">
			<Button
				variant="none"
				className="text-red-600 hover:bg-red-200 py-1 rounded-lg text-left px-3"
				onClick={handleDelete}
			>
				Hapus
			</Button>
			{/* <Button
				variant="none"
				className="hover:bg-gray-200 py-1 rounded-lg text-left px-3"
			>
				Edit
			</Button> */}
		</div>
	);
};

export default Action;
