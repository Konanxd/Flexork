import ContactInput from '@/Components/ContactInput';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { useState } from 'react';

export default function CompanyEdit() {
    const [profileImage, setProfileImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <GuestLayout className="h-auto">
            <form className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12">
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        unggah foto profile Perusahaan
                    </h2>
                    {profileImage && (
                        <img
                            src={profileImage}
                            alt="Profile Preview"
                            className="mt-2 h-40 w-40 rounded-lg border object-cover"
                        />
                    )}
                    <label className="flex h-32 w-64 cursor-pointer flex-col items-center justify-center rounded-xl border-[3px] border-dashed border-gray-400 hover:border-gray-600">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                                handleImageChange(e, setProfileImage)
                            }
                        />
                        <span className="text-center font-semibold text-gray-700">
                            UNGGAH FILE DISINI
                        </span>
                        <span className="text-sm text-gray-500">
                            ukuran file maksimal 5MB
                        </span>
                    </label>
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        unggah banner Perusahaan
                    </h2>
                    {bannerImage && (
                        <img
                            src={bannerImage}
                            alt="Banner Preview"
                            className="mt-2 w-full max-w-[600px] rounded-lg border object-cover"
                        />
                    )}
                    <label className="flex h-32 w-64 cursor-pointer flex-col items-center justify-center rounded-xl border-[3px] border-dashed border-gray-400 hover:border-gray-600">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                                handleImageChange(e, setBannerImage)
                            }
                        />
                        <span className="text-center font-semibold text-gray-700">
                            UNGGAH FILE DISINI
                        </span>
                        <span className="text-sm text-gray-500">
                            ukuran file maksimal 5MB
                        </span>
                    </label>
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
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        rows="5"
                        placeholder="silahkan Isi Tentang Saya Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Bidang Perusahaan</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        rows="5"
                        placeholder="silahkan Isi Pengalaman Kerja Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Alamat</h2>
                    <TextAreaInput
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
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
