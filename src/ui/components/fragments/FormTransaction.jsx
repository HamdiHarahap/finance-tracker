import Button from '../elements/Button';
import InputForm from '../elements/Input';
import SelectForm from '../elements/Select';
import TextareaForm from '../elements/Textarea';
import { addTransaction } from '../../../services/transaction.service';
import Swal from 'sweetalert2';

const FormTransaction = (props) => {
	const { onClick } = props;

	const handleStoreData = (e) => {
		e.preventDefault();

		const data = {
			jumlah: parseFloat(e.target.jumlah.value),
			keterangan: e.target.keterangan.value,
			tanggal: e.target.tanggal.value,
			jenis: e.target.jenis.value,
			deskripsi: e.target.deskripsi.value,
		};

		const res = addTransaction(data);
		if (res.success) {
			Swal.fire({
				title: res.message,
				icon: 'success',
			}).then(() => {
				e.target.reset();
				onClick();
			});
		}
	};

	return (
		<div className="bg-[#f4f4f9] p-5 rounded-lg shadow-md border border-slate-300 w-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-[520px]:w-80">
			<div className="flex justify-between items-center mb-5">
				<h1 className="font-semibold text-xl tracking-wide">
					Tambah Transaksi
				</h1>
				<Button variant="none" onClick={onClick}>
					<img src="/assets/close.svg" alt="" className="w-5" />
				</Button>
			</div>
			<form className="space-y-5" onSubmit={handleStoreData}>
				<InputForm
					label="Jumlah"
					type="number"
					name="jumlah"
					placeholder="Masukkan jumlah uang"
				/>
				<InputForm
					label="Keterangan"
					type="text"
					name="keterangan"
					placeholder="Contoh: Beli makan"
				/>
				<InputForm label="Tanggal" type="date" name="tanggal" />
				<SelectForm
					label="Jenis"
					name="jenis"
					options={[
						{ value: 'pemasukan', label: 'Pemasukan' },
						{ value: 'pengeluaran', label: 'Pengeluaran' },
					]}
				/>
				<TextareaForm
					label="Deskripsi (opsional)"
					name="deskripsi"
					placeholder="Catatan tambahan..."
				/>
				<Button variant="primary" type="submit">
					Simpan Transaksi
				</Button>
			</form>
		</div>
	);
};

export default FormTransaction;
