import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children }) {
    const navItems = [
        { label: 'DAFTAR', path: 'register' },
        { label: 'MASUK', path: 'login' },
    ];

    return (
        <div>
            <NavBar navItems={navItems} />
            <div className="poppins-regular flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                {children}
            </div>
        </div>
    );
}
