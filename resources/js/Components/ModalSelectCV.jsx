import axios from 'axios';
import { useState } from 'react';
import CloseIcon from './CloseIcon';
import PrimaryButton from './PrimaryButton';

export default function ModalSelectCV({ onClose, cvs, vacancyId, onSuccess }) {
    const [selectedCV, setSelectedCV] = useState(
        cvs.length > 0 ? cvs[0].id_cv : '',
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/apply', {
                id_cv: selectedCV,
                id_vacancy: vacancyId,
            });

            alert('Lamaran Anda berhasil didaftarkan!');
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Failed to submit application:', error);
            alert('Terjadi kesalahan saat proses melamar.');
        }
    };

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
                    />
                    <h1 className="text-xl uppercase">Pilih CV</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col gap-4"
                >
                    <select
                        className="w-full rounded-md border p-2"
                        value={selectedCV}
                        onChange={(e) => setSelectedCV(e.target.value)}
                    >
                        {cvs.map((cv, index) => (
                            <option key={index} value={cv.id_cv}>
                                {cv.original_cv_name}
                            </option>
                        ))}
                    </select>

                    <PrimaryButton type="submit" className="w-full">
                        Kirim
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}
