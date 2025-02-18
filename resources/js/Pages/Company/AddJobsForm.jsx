import MultiInput from '@/Components/Form/MultiInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function AddJobsForm() {
    const [formData, setFormData] = useState({
        title_vacancy: '',
        description_vacancy: '',
        deadline_vacancy: '',
        location_vacancy: '',
        minhour: '',
        maxhour: '',
        experience_vacancy: '',
        minsalary: '',
        maxsalary: '',
        jobdesk_vacancy: [],
        benefit_vacancy: [],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/buka-lowongan', {
            ...formData,
            jobdesk_vacancy: JSON.stringify(formData.jobdesk_vacancy),
            benefit_vacancy: JSON.stringify(formData.benefit_vacancy),
        });
    };

    const handleJobdeskChange = (newJobdesk) => {
        setFormData({ ...formData, jobdesk_vacancy: newJobdesk });
    };

    const handleBenefitChange = (newBenefit) => {
        setFormData({ ...formData, benefit_vacancy: newBenefit });
    };

    return (
        <GuestLayout className="h-auto">
            <form
                onSubmit={handleSubmit}
                className="form m-6 flex w-full max-w-[1000px] flex-col gap-5 rounded-lg bg-white px-20 py-12"
            >
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        Judul Lowongan
                    </h2>
                    <TextInput
                        name="title_vacancy"
                        value={formData.title_vacancy}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="silahkan Isi Nama Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        Deskripsi Pekerjaan
                    </h2>
                    <TextAreaInput
                        rows="5"
                        name="description_vacancy"
                        value={formData.description_vacancy}
                        onChange={handleChange}
                        className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder="silahkan Isi Nama Perusahaan"
                    />
                </div>
                <div className="flex flex-col gap-1.5 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        Tenggat Penerimaan
                    </h2>
                    <div className="flex flex-row items-center gap-3">
                        <input
                            type="date"
                            name="deadline_vacancy"
                            value={formData.deadline_vacancy}
                            onChange={handleChange}
                            id=""
                            className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 text-xl">
                    <h2 className="px-2 font-semibold capitalize">
                        keterangan Pekerjaan
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2 px-6 text-xl">
                            <div className="flex flex-row items-center gap-2 text-sm capitalize text-[#5B5B5B]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="#5B5B5B"
                                >
                                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                </svg>
                                <span>lokasi perusahaan</span>
                            </div>
                            <TextAreaInput
                                rows="5"
                                name="location_vacancy"
                                value={formData.location_vacancy}
                                onChange={handleChange}
                                className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                placeholder="silahkan Isi Nama Perusahaan"
                            />
                        </div>
                        {/* <div className="flex flex-col gap-2 px-6">
                            <div className="flex flex-row items-center gap-2 text-sm capitalize text-[#5B5B5B]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                >
                                    <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z"></path>
                                </svg>
                                <span>Tags</span>
                            </div>
                            <TextAreaInput
                                rows="5"
                                className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                placeholder="silahkan Isi Nama Perusahaan"
                            />
                        </div> */}
                        <div className="flex flex-col gap-2 px-6">
                            <div className="flex flex-row items-center gap-2 text-sm capitalize text-[#5B5B5B]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
                                </svg>
                                <span>Jam kerja</span>
                            </div>
                            <div className="flex w-full flex-row items-center gap-2">
                                <input
                                    type="time"
                                    name="minhour"
                                    value={formData.minhour}
                                    onChange={handleChange}
                                    id=""
                                    className="w-full rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                />
                                <span>-</span>
                                <input
                                    type="time"
                                    name="maxhour"
                                    value={formData.maxhour}
                                    onChange={handleChange}
                                    id=""
                                    className="w-full rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 px-6">
                            <div className="flex flex-row items-center gap-2 text-sm capitalize text-[#5B5B5B]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path>
                                </svg>
                                <span>pengalaman kerja</span>
                            </div>
                            <TextInput
                                name="experience_vacancy"
                                value={formData.experience_vacancy}
                                onChange={handleChange}
                                className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                placeholder="silahkan Isi Nama Perusahaan"
                            />
                        </div>
                        <div className="flex flex-col gap-2 px-6">
                            <div className="flex flex-row items-center gap-2 text-sm capitalize text-[#5B5B5B]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"></path>
                                </svg>
                                <span>jumlah gaji</span>
                            </div>
                            <div className="flex w-full flex-row items-center gap-2">
                                <TextInput
                                    type="number"
                                    name="minsalary"
                                    value={formData.minsalary}
                                    onChange={handleChange}
                                    className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                    placeholder="silahkan Isi Nama Perusahaan"
                                />
                                <span>-</span>
                                <TextInput
                                    type="number"
                                    name="maxsalary"
                                    value={formData.maxsalary}
                                    onChange={handleChange}
                                    className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                                    placeholder="silahkan Isi Nama Perusahaan"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xl">
                        <h2 className="px-2 font-semibold capitalize">
                            Jobdesk
                        </h2>

                        <MultiInput
                            label="Jobdesk"
                            values={formData.jobdesk_vacancy}
                            onChange={handleJobdeskChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 text-xl">
                        <h2 className="px-2 font-semibold capitalize">
                            benefit
                        </h2>

                        <MultiInput
                            values={formData.benefit_vacancy}
                            label="Benefit"
                            onChange={handleBenefitChange}
                        />

                        {/* <TextAreaInput
                            rows="5"
                            name="benefit"
                            value={formData.benefit}
                            onChange={handleChange}
                            className="rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                            placeholder="silahkan Isi Nama Perusahaan"
                        /> */}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <PrimaryButton
                        type="submit"
                        className="w-full bg-[#1673DE] py-4 text-lg font-semibold uppercase text-white focus:ring-transparent"
                    >
                        simpan
                    </PrimaryButton>
                    <SecondaryButton
                        className="w-full bg-zinc-400 py-4 text-lg font-semibold uppercase text-white hover:bg-zinc-300 focus:ring-transparent"
                        onClick={() => router.visit('/company/dashboard')}
                    >
                        batal
                    </SecondaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
