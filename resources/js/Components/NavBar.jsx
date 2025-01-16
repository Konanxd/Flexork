import NavLink from './NavLink';

const NavBar = ({ navItems }) => {
    return (
        <nav className="flex w-full border border-b-[#1673DE]">
            <div className="container m-auto flex max-w-7xl items-center justify-between py-3">
                <img src={'./assets/logo.png'} alt="Flexork" width={160} />
                <div className="flex gap-3">
                    {navItems.map((item, index) => (
                        <NavLink href={route(item.path)} key={index}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
