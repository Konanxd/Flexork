import NavLink from './NavLink';

const NavBar = ({ navItems = [], isAuth = false, userName = '' }) => {
    return (
        <nav className="flex w-full flex-col border border-b-[#1673DE]">
            <div className="m-auto flex w-full items-center justify-between py-3">
                <img src={'../assets/logo.png'} alt="Flexork" width={160} />
                {isAuth ? (
                    <div className="text-md text-[#1673DE]">
                        Halo, &nbsp;
                        <span className="text-[#1673DE]">{userName}</span>
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
            {isAuth ? (
                <div className="flex w-full items-center justify-center bg-[#1673DE]">
                    <div className="flex max-w-2xl gap-5">
                        <NavLink className="text-slate-100" href="#">
                            CARI LOWONGAN
                        </NavLink>
                        <NavLink className="text-slate-100" href="#">
                            LIHAT PROFILE
                        </NavLink>
                        <NavLink className="text-slate-100" href="#">
                            NOTIFIKASI
                        </NavLink>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
};

export default NavBar;
