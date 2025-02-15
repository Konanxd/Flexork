import SearchBar from '@/Components/SearchBar';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Dashboard() {
    const trackerJobs = [
        { status: 'Lowongan Dilamar', color: '#9F9F9F' },
        { status: 'Diterima', color: '#44CFCB' },
        { status: 'Ditolak', color: '#F16F6F' },
        { status: 'Menunggu', color: '#6FACF1' },
    ];

    const renderTrackerJobs = () => {
        return trackerJobs.map((item, index) => (
            <div
                key={index}
                className="flex w-full flex-row items-center gap-3 rounded-2xl border bg-white p-6"
            >
                <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: item.color }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                    >
                        <path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM13 12V16H11V12H8L12 8L16 12H13Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="poppins-semibold">{item.status}</span>
                    <span className="text-xs text-[#9F9F9F]">
                        {index === 0
                            ? '10 Lowongan'
                            : index === 1
                              ? '2 Lowongan'
                              : index === 2
                                ? '12 Lowongan'
                                : '1 Lowongan'}
                    </span>
                </div>
            </div>
        ));
    };

    const categoriesPopular = [
        {
            name: 'Intern Programmer',
            total: 1200,
            img: 'assets/programmer.png',
        },
        { name: 'Desain Grafis', total: 1200, img: 'assets/designer.png' },
        {
            name: 'Penulis dan Penerjemah',
            total: 1200,
            img: 'assets/writer.png',
        },
        {
            name: 'Pemasaran dan Periklanan',
            total: 1200,
            img: 'assets/marketing.png',
        },
    ];

    const renderPopularCategories = () => {
        return categoriesPopular.map((item, index) => (
            <div
                className="flex w-full flex-col border-gray-300 bg-white shadow-lg"
                key={index}
            >
                <div className="object-cover">
                    <img src={item.img} className="w-full" />
                </div>
                <div className="flex flex-col px-4 py-6">
                    <span className="poppins-semibold text-md line-clamp-1">
                        {item.name}
                    </span>
                    <span className="text-xs text-[#9F9F9F]">
                        {item.total} Lowongan
                    </span>
                </div>
            </div>
        ));
    };

    return (
        <GuestLayout>
            <div className="mx-5 w-full p-6">
                <div className="w-full bg-red-600">
                    <SearchBar className="" />
                </div>
                <div className="my-4 flex w-full flex-row justify-center gap-5">
                    {renderTrackerJobs()}
                </div>

                <div className="flex w-full flex-col justify-center gap-6 bg-white p-5 pt-6">
                    <span className="poppins-semibold text-lg">
                        Kategori Populer
                    </span>
                    <div className="flex w-full flex-row gap-5">
                        {renderPopularCategories()}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
