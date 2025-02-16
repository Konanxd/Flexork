import ContactInput from '@/Components/ContactInput';
import FileUploadBtn from '@/Components/FileUploadBtn';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';

export default function CompanyEdit() {
    return (
        <GuestLayout>
            <form className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12">
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        unggah foto profile Perusahaan
                    </h2>
                    <FileUploadBtn className=""></FileUploadBtn>
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        unggah banner Perusahaan
                    </h2>
                    <FileUploadBtn className=""></FileUploadBtn>
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Nama Perusahaan</h2>
                    <TextInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="silahkan Isi Nama Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Tentang Perusahaan</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="silahkan Isi Tentang Saya Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Bidang Perusahaan</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="silahkan Isi Pengalaman Kerja Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Alamat</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4]"
                        rows="5"
                        placeholder="silahkan Isi Alamat Perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">kontak</h2>
                    <div className="flex flex-col gap-4">
                        <ContactInput></ContactInput>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <PrimaryButton className="w-full bg-[#1673DE] py-4 text-lg font-semibold uppercase text-white focus:ring-transparent">
                        simpan
                    </PrimaryButton>
                    <PrimaryButton className="bg-9F9F9F w-full bg-[#9F9F9F] py-4 text-lg font-semibold uppercase tracking-normal text-white hover:bg-zinc-300 focus:ring-transparent">
                        batal
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
