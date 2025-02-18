import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function CompanyEdit({ auth, company }) {
    const [profileImage, setProfileImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);
    const [formData, setFormData] = useState({
        name_company: company.name_company || '',
        email: auth.user.email || '',
        email_company: company.email_company || '',
        description_company: company.description_company || '',
        address_company: company.address_company || '',
        photo: null,
    });

    const handleImageChange = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setFormData({
                ...formData,
                [e.target.name]: setImage,
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put('/profile/edit', formData);
    };

    return (
        <GuestLayout className="h-auto">
            <form
                onSubmit={handleSubmit}
                className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12"
            >
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
                            name="photo"
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
                    <h2 className="px-2 font-semibold">Nama Perusahaan</h2>
                    <TextInput
                        name="name_company"
                        value={formData.name_company}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="Silahkan isi nama perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Email Akun</h2>
                    <TextInput
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="Silahkan isi nama perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Email Perusahaan</h2>
                    <TextInput
                        name="email_company"
                        value={formData.email_company}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="Silahkan isi nama perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Tentang Perusahaan</h2>
                    <TextAreaInput
                        name="description_company"
                        value={formData.description_company}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        rows="5"
                        placeholder="Silahkan isi tentang perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold">Alamat</h2>
                    <TextAreaInput
                        name="address_company"
                        value={formData.address_company}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        rows="5"
                        placeholder="Silahkan isi address_company perusahaan"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <PrimaryButton className="w-full bg-[#1673DE] py-4 text-lg font-semibold uppercase text-white focus:ring-transparent">
                        simpan
                    </PrimaryButton>
                    <SecondaryButton
                        className="bg-9F9F9F w-full bg-[#9F9F9F] py-4 text-lg font-semibold uppercase tracking-normal text-white hover:bg-zinc-300 focus:ring-transparent"
                        onClick={() => router.visit('/company/profile')}
                    >
                        batal
                    </SecondaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
