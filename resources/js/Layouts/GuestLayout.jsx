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
                <div className="mb-14 mt-14 w-full overflow-hidden border-2 border-slate-300 bg-white px-6 py-4 shadow-xl sm:max-w-lg sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
