export default function UserPolicy() {
    const Segment = 'flex flex-col gap-1';
    const SubSegment = 'ml-4';

    const policies = [
        {
            title: '1. Persyaratan Keanggotaan',
            content:
                'Calon pengguna harus berusia minimal 18 tahun, dan memiliki dokumen pendukung seperti kartu mahasiswa atau surat keterangan dari institusi pendidikan.',
        },
        {
            title: '2. Keamanan Data Pribadi',
            content:
                'Flexork berkomitmen melindungi data pribadi pengguna. Informasi yang diberikan saat pendaftaran hanya akan digunakan untuk tujuan verifikasi dan pengelolaan akun, sesuai dengan kebijakan privasi kami.',
        },
        {
            title: '3. Tanggung Jawab Pengguna',
            content:
                'Pengguna diharapkan memberikan informasi yang akurat saat mendaftar dan menjaga profesionalisme dalam setiap interaksi di platform ini. Pelanggaran terhadap kebijakan Flexork dapat mengakibatkan pembatasan atau penangguhan akun.',
        },
        {
            title: '4. Komunikasi dan Transaksi',
            content:
                'Semua komunikasi dan transaksi antara pengguna dan penyedia pekerjaan harus dilakukan melalui sistem Flexork untuk memastikan transparansi dan keamanan.',
        },
        {
            title: '5. Syarat dan Ketentuan Pekerjaan',
            content:
                'Flexork memfasilitasi pencarian pekerjaan part-time, tetapi setiap kesepakatan terkait kontrak, jadwal, dan pembayaran adalah tanggung jawab masing-masing pihak (pengguna dan pemberi kerja).',
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
                    Kebijakan dan Persyaratan Pengguna Flexork
                </h1>
                <div className="flex flex-col gap-4 text-[#5B5B5B]">
                    <p>
                        Flexork adalah platform yang dirancang khusus untuk
                        membantu mahasiswa di Kota Bandung menemukan peluang
                        pekerjaan part-time yang sesuai dengan jadwal dan minat
                        mereka. Untuk memastikan pengalaman yang aman dan
                        produktif, kami menetapkan beberapa kebijakan dan
                        persyaratan berikut:
                    </p>

                    {policies.map((policy, index) => (
                        <PolicySection
                            key={index}
                            title={policy.title}
                            content={policy.content}
                        />
                    ))}

                    <p>
                        Dengan bergabung di Flexork, Anda menyetujui kebijakan
                        dan persyaratan ini untuk menciptakan komunitas yang
                        saling mendukung. Kami berharap platform ini menjadi
                        langkah awal untuk pengalaman kerja yang bermanfaat bagi
                        mahasiswa di Bandung!
                    </p>
                </div>
            </span>
        </div>
    );
}
