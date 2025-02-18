import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { router, useForm } from '@inertiajs/react';

export default function AccountEdit({ auth }) {
    const { data, setData, processing, errors, reset } = useForm({
        name: auth.user.name,
        gender: auth.seeker.gender_seeker,
        email: auth.user.email,
        born_date: auth.seeker.born_date,
        phone_seeker: auth.seeker.phone_seeker,
        address: auth.seeker.address_seeker,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.patch(route('profile.update'), data, {
            preserveScroll: true,
        });
    };
    console.log(auth);
    return (
        <GuestLayout>
            <form
                onSubmit={handleSubmit}
                className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12"
            >
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Nama</h2>
                    <TextInput
                        id="name"
                        name="name"
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="Ubah Nama Anda"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Email</h2>
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="Ubah Email Anda"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Nomor Telepon</h2>
                    <TextInput
                        id="phone_seeker"
                        name="phone_seeker"
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="SIlahkan Isi Nama Anda"
                        value={data.phone_seeker}
                        onChange={(e) =>
                            setData('phone_seeker', e.target.value)
                        }
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Tanggal Lahir</h2>
                    <TextInput
                        id="born_date"
                        name="born_date"
                        type="date"
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="SIlahkan Isi Nama Anda"
                        value={data.born_date}
                        onChange={(e) => setData('born_date', e.target.value)}
                    />
                </div>
                {/* <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Tentang Saya</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Tentang Saya Anda"
                    />
                </div> */}
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Alamat</h2>
                    <TextAreaInput
                        id="address"
                        name="address"
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Alamat Anda"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                    />
                </div>
                {/* <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Pengalaman Kerja</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Pengalaman Kerja Anda"
                    />
                </div> */}
                {/* <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Pendidikan Terakhir</h2>
                    <TextInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="SIlahkan Isi Pendidikan Anda"
                    />
                </div> */}
                {/* <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Sosial Media</h2>
                    <SocialMediaInput></SocialMediaInput>
                </div> */}
                <div className="flex flex-col gap-3">
                    <PrimaryButton className="w-full bg-[#1673DE] py-4 text-lg font-semibold uppercase text-white focus:ring-transparent">
                        simpan
                    </PrimaryButton>
                    <SecondaryButton
                        onClick={(e) => router.get('/profile')}
                        className="bg-9F9F9F w-full bg-[#9F9F9F] py-4 text-lg font-semibold uppercase tracking-normal text-white hover:bg-[#F16F6F] focus:ring-transparent"
                    >
                        batal
                    </SecondaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
