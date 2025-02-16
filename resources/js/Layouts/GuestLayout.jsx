import NavBar from '@/Components/NavBar';

export default function GuestLayout({ auth, children, className = '' }) {
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
