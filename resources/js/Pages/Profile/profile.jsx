import DeleteAccount from '@/Components/Account/DeleteAccount';
import MyAccount from '@/Components/Account/MyAccount';
import UserPolicy from '@/Components/Account/UserPolicy';
import WorkHistory from '@/Components/Account/WorkHistory';
import LogoutButton from '@/Components/LogoutButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Profile({ auth }) {
    const [activeComponent, setActiveComponent] = useState('MyAccount');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'MyAccount':
                return <MyAccount auth={auth} />;
            case 'WorkHistory':
                return <WorkHistory />;
            case 'UserPolicy':
                return <UserPolicy />;
            case 'DeleteAccount':
                return <DeleteAccount />;
            default:
                return <MyAccount />;
        }
    };

    return (
        <GuestLayout>
            <Head title="Akun Saya" />
            <div className="flex h-screen w-full flex-row gap-5 p-6">
                <div className="flex h-full w-[400px] flex-col items-center rounded-lg bg-white pb-10 pt-[100px]">
                    <div className="flex h-full flex-col gap-9">
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'MyAccount' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('MyAccount')}
                        >
                            Akun Saya
                        </button>
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'WorkHistory' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('WorkHistory')}
                        >
                            Riwayat Bekerja
                        </button>
                        <button
                            className={`text-base font-medium capitalize ${activeComponent === 'UserPolicy' ? 'font-bold text-black' : 'text-zinc-400'}`}
                            onClick={() => setActiveComponent('UserPolicy')}
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

                <div className="scrollbar-none h-full w-full overflow-x-scroll rounded-lg bg-white">
                    {renderComponent()}
                </div>
            </div>
        </GuestLayout>
    );
}
