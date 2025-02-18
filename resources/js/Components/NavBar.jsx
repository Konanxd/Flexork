import { Link } from '@inertiajs/react';
import NavLink from './NavLink';

const NavBar = ({ auth }) => {
    return (
        <nav className="poppins-regular flex w-full flex-col border border-b-[#1673DE]">
            <div className="m-auto flex w-full items-center justify-between px-6 py-3">
                <Link href={route('dashboard')}>
                    <img src={'../assets/logo.png'} alt="Flexork" width={160} />
                </Link>
                {auth?.user ? (
                    <div className="text-md flex flex-row gap-1 text-[#1673DE]">
                        Halo,
                        <span className="text-[#1673DE]">{auth.user.name}</span>
                    </div>
                ) : (
                    <div className="flex gap-3 uppercase text-[#1673DE]">
                        <NavLink href={'login'} className="hover:text-blue-400">
                            masuk
                        </NavLink>
                        <NavLink
                            href={'register-pelamar'}
                            className="hover:text-blue-400"
                        >
                            daftar
                        </NavLink>
                        <NavLink
                            className="flex flex-row gap-2 border-2 border-[#1673DE] px-3 py-1 hover:bg-[#1673DE] hover:text-white"
                            href={'register-penyedia'}
                        >
                            <span>daftar penyedia</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                            </svg>
                        </NavLink>
                    </div>
                )}
            </div>
            <div className="flex w-full items-center justify-center bg-[#1673DE]">
                <div className="flex gap-10 py-1.5 text-sm font-medium uppercase text-white">
                    <NavLink href="/dashboard" className="hover:text-white/70">
                        dashboard
                    </NavLink>
                    <NavLink href="/cari" className="hover:text-white/70">
                        cari lowongan
                    </NavLink>
                    <NavLink href="/profile" className="hover:text-white/70">
                        lihat profile
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
