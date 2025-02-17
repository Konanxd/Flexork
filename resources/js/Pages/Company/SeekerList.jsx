import SeekerRequestCard from '@/Components/CompanyCard/SeekerRequestCard';
import GuestLayout from '@/Layouts/GuestLayout';
import axios from 'axios';
import { useState } from 'react';

export default function SeekerList({ vacancy, appliers }) {
    console.log(appliers);
    // Store the list of seekers in state
    const [seekerList, setSeekerList] = useState(appliers);

    // Handle accept action
    const acceptHandler = async (id_apply) => {
        try {
            await axios.put(`/api/applies/${id_apply}/accept`);
            // Remove seeker from the list
            setSeekerList(
                seekerList.filter((apply) => apply.id_apply !== id_apply),
            );
        } catch (error) {
            console.error('Error accepting:', error);
        }
    };

    // Handle reject action
    const rejectHandler = async (id_apply) => {
        try {
            await axios.put(`/api/applies/${id_apply}/reject`);
            // Remove seeker from the list
            setSeekerList(
                seekerList.filter((apply) => apply.id_apply !== id_apply),
            );
        } catch (error) {
            console.error('Error rejecting:', error);
        }
    };

    return (
        <GuestLayout className="p-6">
            <div className="flex w-full flex-col gap-6 rounded-xl bg-white p-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">
                        {vacancy.title_vacancy}
                    </h1>
                    <span className="text-sm capitalize text-zinc-500">
                        berakhir pada {vacancy.deadline_vacancy}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="ml-2 text-lg font-semibold capitalize">
                        daftar pelamar
                    </h2>
                    <div className="flex w-full flex-col gap-3 rounded-lg bg-zinc-100 p-3">
                        {seekerList.length > 0 ? (
                            seekerList.map((apply) => (
                                <SeekerRequestCard
                                    key={apply.id_apply}
                                    nama={apply.cv.seeker.name_seeker}
                                    onCheck={`${apply.cv.cv_url}`}
                                    onAccept={() =>
                                        acceptHandler(apply.id_apply)
                                    }
                                    onReject={() =>
                                        rejectHandler(apply.id_apply)
                                    }
                                />
                            ))
                        ) : (
                            <h1>Belum ada yang melamar lowongan ini.</h1>
                        )}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
