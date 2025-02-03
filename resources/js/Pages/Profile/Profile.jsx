import AccountMenu from '@/Components/AccountMenu';
import MyAccount from '@/Components/MyAccount';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Profile() {
    return (
        <GuestLayout>
            <Head title="Akun Saya" />
            <div className="flex h-screen w-full flex-row gap-5 p-5">
                <AccountMenu></AccountMenu>
                <div className="h-full w-full overflow-x-scroll rounded-lg bg-white scrollbar-none">
                    <MyAccount title="masuk"></MyAccount>
                </div>
            </div>
        </GuestLayout>
    );
}
