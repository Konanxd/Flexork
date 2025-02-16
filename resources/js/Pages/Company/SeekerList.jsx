import SeekerRequestCard from '@/Components/Company/CompanyCard/SeekerRequestCard';
import GuestLayout from '@/Layouts/GuestLayout';

export default function SeekerList({ ...props }) {
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
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <span className="text-sm capitalize text-zinc-500">
                        berakhir pada {date}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="ml-2 text-lg font-semibold capitalize">
                        daftar pelamar
                    </h2>
                    <div className="flex w-full flex-col gap-3 rounded-lg bg-zinc-100 p-3">
                        {seekers.map((seeker, index) => (
                            <SeekerRequestCard
                                key={index}
                                nama={seeker.nama}
                                image={seeker.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
