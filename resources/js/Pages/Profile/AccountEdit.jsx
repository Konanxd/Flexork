import SocialMediaInput from '@/Components/Account/SocialMediaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';

export default function AccountEdit() {
    return (
        <GuestLayout>
            <form className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12">
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Nama</h2>
                    <TextInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="SIlahkan Isi Nama Anda"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Tentang Saya</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Tentang Saya Anda"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Pengalaman Kerja</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Pengalaman Kerja Anda"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Alamat</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="SIlahkan Isi Alamat Anda"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Pendidikan Terakhir</h2>
                    <TextInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        placeholder="SIlahkan Isi Pendidikan Anda"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Sosial Media</h2>
                    <SocialMediaInput></SocialMediaInput>
                </div>
                <div className="flex flex-col gap-3">
                    <PrimaryButton className="w-full py-4 text-lg font-semibold uppercase focus:ring-transparent">
                        simpan
                    </PrimaryButton>
                    <SecondaryButton className="bg-9F9F9F w-full bg-[#9F9F9F] py-4 text-lg font-semibold uppercase tracking-normal text-white hover:bg-[#F16F6F] focus:ring-transparent">
                        batal
                    </SecondaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
