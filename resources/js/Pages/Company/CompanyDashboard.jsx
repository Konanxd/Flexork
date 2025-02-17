import CompanyJobCard from '@/Components/Company/CompanyCard/CompanyJobCard';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';

export default function CompanyDashboard() {
    const jobs = [
        {
            title: 'Intern Programmer',
            date: '1/12/2024',
            tag: 'Computer',
            desc: 'Sebagai Intern Programmer, Anda akan bekerja sama dengan tim pengembang dalam membangun dan mengoptimalkan aplikasi web maupun mobile. Anda akan terlibat dalam proses debugging, penulisan kode yang efisien, serta pengujian fitur baru. Kandidat yang ideal memiliki dasar pemrograman yang kuat, pemahaman tentang algoritma dan struktur data, serta mampu bekerja dalam tim dengan baik.',
        },
        {
            title: 'UI/UX Designer',
            date: '5/12/2024',
            tag: 'Design',
            desc: 'Sebagai UI/UX Designer, Anda bertanggung jawab dalam merancang pengalaman pengguna yang menarik dan fungsional untuk produk digital perusahaan. Anda akan bekerja dengan tim pengembang dan produk untuk membuat wireframe, mockup, serta prototipe interaktif yang memastikan kenyamanan pengguna. Memiliki pemahaman yang baik tentang prinsip desain, tools seperti Figma atau Adobe XD, serta pengetahuan dasar HTML/CSS menjadi nilai tambah.',
        },
        {
            title: 'Marketing Specialist',
            date: '10/12/2024',
            tag: 'Marketing',
            desc: 'Sebagai Marketing Specialist, Anda akan mengembangkan strategi pemasaran digital, mengelola kampanye iklan, serta menganalisis kinerja pemasaran menggunakan berbagai alat analitik. Anda akan bertanggung jawab dalam meningkatkan brand awareness serta menarik lebih banyak pelanggan melalui berbagai platform seperti media sosial, SEO, dan email marketing. Kandidat ideal harus memiliki kreativitas tinggi, pemahaman tentang digital marketing, serta kemampuan komunikasi yang baik.',
        },
        {
            title: 'Data Analyst',
            date: '15/12/2024',
            tag: 'Data',
            desc: 'Sebagai Data Analyst, Anda akan mengumpulkan, mengolah, dan menganalisis data untuk membantu pengambilan keputusan bisnis. Anda akan bekerja dengan berbagai sumber data, menggunakan alat analitik seperti Python, SQL, dan Tableau untuk menemukan pola dan tren yang relevan. Kandidat yang ideal memiliki pemahaman statistik yang kuat, kemampuan berpikir analitis, serta pengalaman dalam memvisualisasikan data agar mudah dipahami oleh tim bisnis.',
        },
        {
            title: 'Customer Support',
            date: '20/12/2024',
            tag: 'Support',
            desc: 'Sebagai Customer Support, Anda akan menjadi penghubung antara pelanggan dan perusahaan dengan memberikan layanan bantuan terbaik. Anda akan menangani pertanyaan, keluhan, serta memberikan solusi atas permasalahan pelanggan melalui berbagai kanal komunikasi seperti email, chat, atau telepon. Kandidat yang ideal memiliki kemampuan komunikasi yang baik, empati tinggi, serta mampu menyelesaikan masalah dengan cepat dan efektif.',
        },
    ];

    return (
        <GuestLayout className="h-auto gap-6 p-6">
            <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white px-4 py-4 uppercase">
                <span className="ml-2 text-lg font-semibold">
                    daftar lowongan
                </span>
                <PrimaryButton
                    className="flex flex-row gap-2 bg-[#1673DE] text-white"
                    onClick={() => router.visit('/company/job/add')}
                >
                    <span>tambah lowongan</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="rgba(255,255,255,1)"
                    >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                </PrimaryButton>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
                {jobs.map((job, index) => (
                    <CompanyJobCard key={index} {...job} />
                ))}
            </div>
        </GuestLayout>
    );
}
