import Button from '../elements/Button';
import InputForm from '../elements/Input';
import SelectForm from '../elements/Select';
import TextareaForm from '../elements/Textarea';

const FormTransaction = () => {
	return (
		<div className="bg-[#f4f4f9] p-5 rounded-lg shadow-md border border-slate-300 w-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
			<h1 className="font-semibold text-xl tracking-wide mb-5">
				Tambah Transaksi
			</h1>
			<form className="space-y-5">
				<InputForm
					label="Jumlah"
					type="number"
					name="amount"
					placeholder="Masukkan jumlah uang"
				/>
				<InputForm
					label="Keterangan"
					type="text"
					name="title"
					placeholder="Contoh: Beli makan"
				/>
				<InputForm label="Tanggal" type="date" name="date" />
				<SelectForm
					label="Jenis"
					name="jenis"
					options={[
						{ value: 'income', label: 'Pemasukan' },
						{ value: 'expense', label: 'Pengeluaran' },
					]}
				/>
				<TextareaForm
					label="Deskripsi"
					name="description"
					placeholder="Catatan tambahan..."
				/>
				<Button variant="primary">Simpan Transaksi</Button>
			</form>
		</div>
	);
};

export default FormTransaction;
