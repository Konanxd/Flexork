export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold uppercase text-gray-700 shadow-sm transition duration-150 ease-in-out focus:outline-none disabled:opacity-25 ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
