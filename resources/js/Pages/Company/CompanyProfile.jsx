import CompanyAccount from '@/Components/Company/CompanyAccount';
import CompanyPolicy from '@/Components/Company/CompanyPolicy';
import LogoutButton from '@/Components/LogoutButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import CompanyDelete from '../../Components/Company/CompanyDelete';

export default function CompanyProfile() {
    const [activeComponent, setActiveComponent] = useState('CompanyAccount');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'CompanyAccount':
                return <CompanyAccount />;
            case 'CompanyPolicy':
                return <CompanyPolicy />;
            case 'DeleteAccount':
                return <CompanyDelete />;
            default:
                return <CompanyAccount />;
        }
    };

    return (
        <GuestLayout>
            <Head title="Akun Saya" />
            <div className="flex h-screen w-full flex-row gap-5 p-6">
                <div className="flex h-full w-[400px] flex-col items-center rounded-lg bg-white pb-10 pt-[100px]">
                    <div className="flex h-full flex-col gap-9">
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'CompanyAccount' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('CompanyAccount')}
                        >
                            Akun Saya
                        </button>
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'CompanyPolicy' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('CompanyPolicy')}
                        >
                            kebijakan
                        </button>
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'DeleteAccount' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('DeleteAccount')}
                        >
                            hapus akun
                        </button>
                    </div>

                    <LogoutButton></LogoutButton>
                </div>

                <div className="h-full w-full overflow-x-scroll rounded-lg bg-white scrollbar-none">
                    {renderComponent()}
                </div>
            </div>
        </GuestLayout>
    );
}
