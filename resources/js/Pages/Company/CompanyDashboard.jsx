import CompanyJobCard from '@/Components/Company/CompanyCard/CompanyJobCard';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';

export default function CompanyDashboard({ auth }) {
    let vacancies = auth.vacancies;

    const handleClick = (e) => {
        e.preventDefault();

        router.get(route('vacancy.create'));
        // router.post(route('logout'));
    };

    return (
        <GuestLayout className="h-auto gap-6 p-6">
            <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white px-4 py-4 uppercase">
                <span className="ml-2 text-lg font-semibold">
                    daftar lowongan
                </span>
                <PrimaryButton
                    onClick={handleClick}
                    className="flex flex-row gap-2 bg-[#1673DE] text-white"
                >
                    <span>tambah lowongan</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="rgba(255,255,255,1)"
                    >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                </PrimaryButton>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
                {vacancies.map((vacancy, index) => (
                    <CompanyJobCard key={index} vacancy={vacancy} />
                ))}
            </div>
        </GuestLayout>
    );
}
