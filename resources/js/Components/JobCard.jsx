import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';

export default function JobCard({ vacancy, ...props }) {
    return (
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6">
            <div className="flex flex-col gap-1.5">
                <h1 className="flex flex-col gap-2 text-lg font-semibold capitalize">
                    {vacancy.title_vacancy}
                </h1>
                <p className="text-[#9F9F9F]">{vacancy.company_vacancy}</p>
            </div>
            <div className="font-medium text-[#1673DE]">
                {vacancy.salary_vacancy.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                })}
            </div>
            <div className="flex flex-row gap-2">
                {vacancy.tags.map((tag) => (
                    <div
                        key={tag.id_tag}
                        className="w-fit rounded-full bg-[#44CFCB] px-4 py-2 text-white"
                    >
                        {tag.name_tag}
                    </div>
                ))}
            </div>
            <div className="line-clamp-2">{vacancy.description_vacancy}</div>
            <div className="flex flex-row gap-3">
                <Link
                    href={route('vacancy.details', { id: vacancy.id_vacancy })}
                >
                    <PrimaryButton className="hover border-2 border-[#1673DE] bg-transparent px-6 text-blue-600 hover:bg-[#1673DE] hover:text-white">
                        lihat
                    </PrimaryButton>
                </Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="border-1 size-9 h-full fill-[#9F9F9F]"
                >
                    <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path>
                </svg>
            </div>
        </div>
    );
}
