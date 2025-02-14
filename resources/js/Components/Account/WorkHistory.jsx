import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import ModalReview from './ModalReview';

export default function WorkHistory() {
    const [reviewOpen, setReviewOpen] = useState(false);

    return (
        <div className="m-10 flex flex-col gap-7">
            <h1 className="text-2xl font-bold uppercase">
                Riwayat Bekerja Anda
            </h1>
            <div className="flex flex-row items-center justify-between rounded-xl bg-[#F0F0F0] px-5 py-4">
                <div className="flex flex-row gap-5">
                    <img
                        src="assets/profile-example.jpg"
                        alt="Profile"
                        className="h-14 w-14 overflow-hidden rounded-full"
                    />
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-lg font-semibold">PT. Pertamina</h3>
                        <span className="text-[#5B5B5B]">
                            Posisi yang diampu
                        </span>
                    </div>
                </div>
                <PrimaryButton
                    className="h-fit w-fit"
                    onClick={() => setReviewOpen(true)}
                >
                    Beri Rating
                </PrimaryButton>
            </div>

            {/* Modal ditampilkan di luar elemen utama untuk memastikan tidak terpengaruh layout */}
            {reviewOpen && <ModalReview onClose={() => setReviewOpen(false)} />}
        </div>
    );
}
