import TextInput from '@/Components/TextInput';
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
                className="flex flex-col rounded-lg border border-gray-300 bg-white shadow-lg"
                key={index}
            >
                <div className="object-cover">
                    <img src={item.img} />
                </div>
                <div className="flex flex-col p-4">
                    <span className="poppins-semibold text-md">
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
            <div className="mx-5">
                <div className="flex w-full flex-row">
                    <div className="poppins-regular text-md flex flex-row items-center bg-[#9F9F9F] px-4 py-2 text-white">
                        FILTER
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="36"
                            height="36"
                            fill="rgba(255,255,255,1)"
                        >
                            <path d="M12 14L8 10H16L12 14Z"></path>
                        </svg>
                    </div>
                    <TextInput
                        className="w-full"
                        placeholder="Saya sedang mencari..."
                    />
                    <div className="text-md flex flex-row items-center bg-[#9F9F9F] px-4 py-2 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="rgba(255,255,255,1)"
                        >
                            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                        </svg>
                        <span>&nbsp;CARI</span>
                    </div>
                </div>

                <div className="my-4 flex w-full flex-row justify-center gap-5">
                    {renderTrackerJobs()}
                </div>

                <div className="flex w-full flex-col justify-center gap-5 bg-white p-5">
                    <span className="poppins-semibold">Kategori Populer</span>
                    <div className="flex flex-row gap-5">
                        {renderPopularCategories()}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
