import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children, className = '' }) {
    const navItems = [
        { label: 'DAFTAR', path: 'register' },
        { label: 'MASUK', path: 'login' },
    ];

    return (
        <div>
            <NavBar navItems={navItems} />
            <div
                className={`poppins-regular flex flex-col items-center bg-[#EEF1F4] ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
