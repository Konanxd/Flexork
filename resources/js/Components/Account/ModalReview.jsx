import { useEffect, useState } from 'react';
import CloseIcon from '../Icon/CloseIcon';
import PrimaryButton from '../PrimaryButton';
import TextAreaInput from '../TextAreaInput';
import FiveStar from './FiveStar';

export default function ModalReview({
    onClose,
    pos,
    user,
    work,
    onReviewSuccess,
    ...props
}) {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (rating > 0 && message != '') {
            setIsDisabled(false);
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`/api/reviews/${work.id_user}`, {
                id_user: user.id_user,
                id_work: work.id_work,
                target_review: 'pelamar',
                score_review: rating,
                text_review: message,
            });

            onReviewSuccess(work.id_work);
            onClose();
        } catch {
            alert('Terjadi kesalahan. Silahkan periksa kembali jaringan Anda.');
        }
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

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
                </div>
                <FiveStar onRate={(value) => handleRating(value)} />

                <div className="flex w-full items-center">
                    <TextAreaInput
                        name="text-ulasan"
                        className={'w-full'}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex w-full flex-col gap-2">
                    <PrimaryButton
                        onClick={handleSubmit}
                        className="bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400"
                        disabled={isDisabled}
                    >
                        kirim
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
