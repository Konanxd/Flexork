import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children }) {
    const navItems = [
        { label: 'DAFTAR', path: 'register' },
        { label: 'MASUK', path: 'login' },
    ];

    return (
        <div>
            <NavBar navItems={navItems} />
            <div className="poppins-regular flex flex-col items-center bg-[#EEF1F4]">
                {children}
            </div>
        </div>
    );
}
