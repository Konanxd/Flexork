import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'poppins-semibold inline-flex items-center leading-5 ' +
                className
                // +
                // (active
                //     ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
                //     : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700') +
                // className
            }
        >
            {children}
        </Link>
    );
}
