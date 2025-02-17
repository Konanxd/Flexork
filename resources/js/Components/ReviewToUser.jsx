import { useState } from 'react';
import ModalReview from './Account/ModalReview';
import PrimaryButton from './PrimaryButton';

export default function ReviewToUser({ nama, date }) {
    const [reviewOpen, setReviewOpen] = useState(false);

    return (
        <div className="border-b-2 px-6 py-3">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <img
                        src=""
                        alt=""
                        className="size-14 overflow-hidden rounded-full bg-zinc-500"
                    />
                    <div className="flex flex-col gap-1.5">
                        <span className="font-semibold capitalize">{nama}</span>
                    </div>
                </div>
                <PrimaryButton
                    className="bg-[#1673DE] tracking-normal text-white hover:bg-blue-400"
                    onClick={() => setReviewOpen(true)}
                >
                    belum diulas!
                </PrimaryButton>
            </div>
            {reviewOpen && (
                <ModalReview pos={nama} onClose={() => setReviewOpen(false)} />
            )}
        </div>
    );
}
