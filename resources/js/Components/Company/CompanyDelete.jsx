export default function CompanyDelete() {
    const Segment = 'flex flex-col gap-1';
    const SubSegment = 'ml-4';

    const policies = [
        {
            title: '1. Proses Penghapusan Akun',
            content:
                'Pengguna yang ingin menghapus akun mereka harus mengajukan permohonan melalui halaman pengaturan akun di platform Flexork. Setelah permohonan diajukan, pengguna akan menerima email konfirmasi bahwa akun mereka akan diproses untuk penghapusan dalam waktu 1 (satu) hari kerja.',
        },
        {
            title: '2. Peninjauan dan Konfirmasi',
            content:
                'Selama masa peninjauan, pengguna tetap memiliki akses terbatas ke akun mereka. Setelah 1 hari kerja, Flexork akan menghapus akun secara permanen dan pengguna akan menerima email pemberitahuan bahwa proses penghapusan telah selesai.',
        },
        {
            title: '3. Keamanan dan Penghapusan Data Pribadi',
            content:
                'Semua data pribadi yang tersimpan di sistem Flexork akan dihapus secara permanen bersamaan dengan penghapusan akun. Namun, data yang telah disampaikan kepada pihak ketiga (misalnya pemberi kerja) selama penggunaan platform berada di luar tanggung jawab Flexork, dan pengguna harus menghubungi pihak terkait untuk permintaan penghapusan data tersebut.',
        },
        {
            title: '4. Pengecualian Data untuk Kepentingan Hukum',
            content:
                'Dalam kasus tertentu, Flexork dapat menyimpan sebagian data sesuai dengan kewajiban hukum atau peraturan yang berlaku, meskipun akun telah dihapus.',
        },
        {
            title: '5. Tidak Dapat Dibatalkan',
            content:
                'Penghapusan akun bersifat final dan tidak dapat dibatalkan. Setelah akun dihapus, pengguna tidak dapat memulihkan data atau informasi yang sebelumnya tersimpan.',
        },
        {
            title: '6. Keterbatasan Tanggung Jawab',
            content:
                'Flexork tidak bertanggung jawab atas kejadian yang melibatkan data pribadi pengguna di luar platform setelah penghapusan akun. Pengguna disarankan untuk mengamankan data atau melakukan koordinasi dengan pihak terkait sebelum menggunakan penghapusan.',
        },
    ];

    const PolicySection = ({ title, content }) => (
        <div className={Segment}>
            <h2>{title}</h2>
            <p className={SubSegment}>{content}</p>
        </div>
    );

    return (
        <div className="px-24 py-16">
            <span className="flex flex-col justify-center gap-14">
                <h1 className="text-center text-2xl font-bold uppercase">
                    Penghapusan Akun
                </h1>
                <div className="flex flex-col gap-4 text-[#5B5B5B]">
                    <p>
                        Flexork menghargai privasi dan keputusan pengguna untuk
                        menghapus akun mereka. Berikut adalah kebijakan yang
                        berlaku untuk penghapusan akun:
                    </p>

                    {policies.map((policy, index) => (
                        <PolicySection
                            key={index}
                            title={policy.title}
                            content={policy.content}
                        />
                    ))}

                    <p>
                        Dengan mengajukan permohonan penghapusan akun, pengguna
                        dianggap telah membaca dan menyetujui kebijakan ini.
                        Jika membutuhkan bantuan lebih lanjut, silakan hubungi
                        tim dukungan Flexork melalui Flexork@email.com.
                    </p>
                </div>
                <button className="rounded-lg bg-red-500 px-5 py-3 text-white hover:bg-red-400">
                    hapus akun
                </button>
            </span>
        </div>
    );
}
