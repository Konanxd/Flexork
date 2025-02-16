import HeadDescription from '@/Components/HeadDescription';
import HeadTitle from '@/Components/HeadTitle';
import SecondaryButton from '@/Components/SecondaryButton';
import SubTitle from '@/Components/SubTitle';
import GuestLayout from '@/Layouts/GuestLayout';
import { useState } from 'react';

const Details = ({ vacancy }) => {
    const [applied, setApplied] = useState(false);
    console.log(vacancy);
    let data;
    if (vacancy != undefined) {
        data = vacancy[0];
    }

    const handleApply = () => {};

    return (
        <GuestLayout>
            {vacancy != undefined ? (
                <div className="shadow-5xl my-14 flex w-full max-w-4xl flex-col gap-6 rounded-2xl bg-white px-8 py-10">
                    <div className="flex flex-col gap-4">
                        <HeadTitle
                            className="text-2xl"
                            title={data.title_vacancy}
                        />
                        <HeadDescription className="text-[#727272]">
                            {data.description_vacancy}
                        </HeadDescription>
                    </div>

                    <div className="flex flex-row">
                        <div>
                            <SecondaryButton
                                onClick={handleApply}
                                className="bg-[#1673DE] tracking-normal text-white hover:bg-zinc-400"
                            >
                                LAMAR
                            </SecondaryButton>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Keterangan</SubTitle>
                        <ul className="space-y-3 px-4 text-sm text-gray-600">
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                </svg>
                                {data.company.address_company}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
                                </svg>
                                {data.workhours_vacancy}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path>
                                </svg>
                                {data.experience_vacancy}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"></path>
                                </svg>
                                {data.salary_vacancy.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    maximumFractionDigits: 0,
                                })}
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Jobdesk</SubTitle>
                        <ul className="list-disc space-y-3 px-9 text-sm text-gray-600">
                            {JSON.parse(data.jobdesk_vacancy).map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Benefit</SubTitle>
                        <ul className="list-disc space-y-3 px-9 text-sm text-gray-600">
                            {JSON.parse(data.benefit_vacancy).map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>
                            <div className="flex flex-row items-center gap-4">
                                <img src="assets/company.png" />
                                <div className="flex flex-col">
                                    <div className="poppins-semibold">
                                        {data.company.name_company}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        IT Consultant
                                    </div>
                                    <div className="flex flex-row gap-2 py-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="18"
                                                height="18"
                                                fill="currentColor"
                                            >
                                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SubTitle>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Review</SubTitle>
                    </div>
                </div>
            ) : (
                <h1 className="items-center">Lowongan tidak teredia.</h1>
            )}
        </GuestLayout>
    );
};

export default Details;
