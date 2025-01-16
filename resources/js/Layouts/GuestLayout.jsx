import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children }) {
    const navItems = [
        { label: 'DAFTAR', path: 'register' },
        { label: 'MASUK', path: 'login' },
    ];

    return (
        <>
            <div>
                <NavBar navItems={navItems} />
            </div>

            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
