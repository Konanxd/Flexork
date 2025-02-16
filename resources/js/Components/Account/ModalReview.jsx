import CloseIcon from '../CloseIcon';
import PrimaryButton from '../PrimaryButton';
import FiveStar from './FiveStar';

export default function ModalReview({ onClose, pos, company, ...props }) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60"
            onClick={onClose} // Tutup modal jika klik di luar
        >
            <div
                className="relative flex w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-white p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Hindari modal tertutup saat klik di dalam modal
            >
                <CloseIcon
                    onClick={onClose}
                    className="left-3 top-3 cursor-pointer"
                ></CloseIcon>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-xl font-bold capitalize">{pos}</h1>
                    <p className="text-center text-gray-600">{company}</p>
                </div>
                <FiveStar onRate={(value) => console.log('Rating:', value)} />

                <div className="flex w-full flex-col gap-2">
                    <PrimaryButton className="bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400">
                        kirim
                    </PrimaryButton>{' '}
                </div>
            </div>
        </div>
    );
}
