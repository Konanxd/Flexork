import CloseIcon from './CloseIcon';
import PrimaryButton from './PrimaryButton';

export default function ModalSelectCV({ onClose }) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60"
            onClick={onClose}
        >
            <div
                className="flex w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-white p-5 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative flex w-full flex-row items-center justify-center">
                    <CloseIcon
                        onClick={onClose}
                        className="absolute left-0 top-0 cursor-pointer hover:fill-red-500"
                    ></CloseIcon>
                    <h1 className="text-xl uppercase">pilih cv</h1>
                </div>
                <select name="" id="" className="w-full rounded-md">
                    <option value="">cv pertama</option>
                    <option value="">cv kedua</option>
                </select>
                <PrimaryButton className="w-full">kirim</PrimaryButton>
            </div>
        </div>
    );
}
