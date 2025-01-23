import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children }) {
    const navItems = [
        { label: 'DAFTAR', path: 'register' },
        { label: 'MASUK', path: 'login' },
    ];

    return (
        <div>
            <NavBar navItems={navItems} />
            <div className="poppins-regular sm:justify-top flex min-h-screen flex-col items-center bg-[#eef1f4] pt-6 sm:pt-0">
                {children}
            </div>
        </div>
    );
}
