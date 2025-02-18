import { useState } from 'react';
import ModalReview from './ModalReview';

export default function WorkHistory() {
    const [reviewOpen, setReviewOpen] = useState(false);

    const workHistory = [
        { company: 'PT. Pertamina', position: 'Posisi yang diampu 1' },
        {
            company: 'CV. Lintas Fortuna Nusantara',
            position: 'Posisi yang diampu 2',
        },
    ];

    return (
        <div className="m-10 flex flex-col gap-7">
            <h1 className="text-2xl font-bold uppercase">
                Riwayat Bekerja Anda
            </h1>

            {/* <div className="flex flex-col gap-2">
                {workHistory.map((work, index) => (
                    <UserRatingCard
                        key={index}
                        company={work.company}
                        position={work.position}
                        onClick={() => setReviewOpen(true)}
                    />
                ))}
            </div> */}

            {reviewOpen &&
                workHistory.map((work, index) => (
                    <ModalReview
                        key={index}
                        company={work.company}
                        pos={work.position}
                        onClose={() => setReviewOpen(false)}
                    />
                ))}
        </div>
    );
}
