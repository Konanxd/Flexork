import { router } from '@inertiajs/react';
import MyAccountDesc from '../Account/MyAccountDesc';
import PrimaryButton from '../PrimaryButton';

export default function CompanyAccount({ auth, company }) {
    return (
        <div className="flex h-full flex-col gap-3">
            <div className="m flex w-full flex-row items-center gap-6 rounded-t-lg bg-gray-400 p-8 sm:flex-col md:flex-row lg:flex-row">
                <img
                    src={
                        auth.user.photo_path
                            ? auth.user.photo_path
                            : 'assets/defaultPic.jpg'
                    }
                    className="size-16 rounded-full bg-slate-300"
                ></img>
                <div className="flex w-full flex-col gap-5 text-white sm:items-center md:items-start">
                    <div className="flex max-w-[70%] flex-row items-center gap-3 sm:flex-col md:flex-row">
                        <div className="flex flex-row gap-2 text-2xl font-semibold capitalize">
                            <div className="flex flex-row">
                                <span className="line-clamp-1">
                                    {company.name_company}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-2 capitalize">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="fill-amber-400"
                        >
                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                        </svg>
                        rating perusahaan :
                        <span className="text-center">
                            <span className="font-semibold">
                                {company.score_company}
                            </span>
                        </span>
                    </div>
                </div>
                <PrimaryButton
                    className="flex items-center gap-2 bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400"
                    onClick={() => router.get('/profile/edit')}
                >
                    <span>edit</span>
                </PrimaryButton>
            </div>
            <div className="flex w-full flex-col gap-6 p-8">
                <MyAccountDesc title="Tentang Perusahaan">
                    <span>{company.description_company}</span>
                </MyAccountDesc>
                <MyAccountDesc
                    title="alamat perusahaan"
                    className="flex flex-col gap-2"
                >
                    <p className="pl-2">{company.address_company}</p>
                </MyAccountDesc>
                <MyAccountDesc title="kontak" className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                        </svg>
                        <span>{company.email_company}</span>
                    </div>
                </MyAccountDesc>
            </div>
        </div>
    );
}
