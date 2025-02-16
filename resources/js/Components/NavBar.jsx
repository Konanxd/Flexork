import NavLink from './NavLink';

const NavBar = ({ auth }) => {
    const navItems = [
        { label: 'DAFTAR', path: 'register-pelamar.index' },
        { label: 'MASUK', path: 'login' },
    ];
    return (
        <nav className="poppins-regular flex w-full flex-col border border-b-[#1673DE]">
            <div className="m-auto flex w-full items-center justify-between py-3">
                <img src={'../assets/logo.png'} alt="Flexork" width={160} />
                {auth?.user ? (
                    <div className="text-md text-[#1673DE]">
                        Halo, &nbsp;
                        <span className="text-[#1673DE]">{auth.user.name}</span>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        {navItems.map((item, index) => (
                            <NavLink
                                className="text-md text-[#1673DE]"
                                href={route(item.path)}
                                key={index}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex w-full items-center justify-center bg-[#1673DE]">
                <div className="flex gap-10 py-1.5 text-sm font-normal uppercase">
                    <NavLink
                        className="text-base font-normal text-slate-100"
                        href="/search"
                    >
                        cari lowongan
                    </NavLink>
                    <NavLink className="text-slate-100" href="/profile">
                        lihat profile
                    </NavLink>
                    <NavLink className="text-slate-100" href="#">
                        notifikasi
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
