import SeekerRequestCard from '@/Components/CompanyCard/SeekerRequestCard';
import GuestLayout from '@/Layouts/GuestLayout';

export default function SeekerList({ vacancy, appliers }) {
    console.log(vacancy);
    console.log(appliers);

    const title = 'Intern Programmer';
    const date = '12/12/2025';
    const seekers = [
        { nama: 'Ahmad Rizki', image: 'https://picsum.photos/100?random=1' },
        { nama: 'Bella Sari', image: 'https://picsum.photos/100?random=2' },
        { nama: 'Cahyo Pratama', image: 'https://picsum.photos/100?random=3' },
        { nama: 'Dewi Lestari', image: 'https://picsum.photos/100?random=4' },
        { nama: 'Eko Saputra', image: 'https://picsum.photos/100?random=5' },
    ];

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
                        {appliers.length > 0 ? (
                            appliers.map((seeker, index) => (
                                <SeekerRequestCard
                                    key={index}
                                    nama={seeker.name_seeker}
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
