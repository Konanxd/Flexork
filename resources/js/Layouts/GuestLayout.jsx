import NavBar from '@/Components/NavBar';
import { usePage } from '@inertiajs/react';

export default function GuestLayout({ children, className = '' }) {
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <div>
            <NavBar auth={auth} />
            <div
                className={`poppins-regular flex flex-col items-center bg-[#EEF1F4] ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
