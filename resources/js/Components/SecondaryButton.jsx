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
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium uppercase transition duration-150 ease-in-out hover:bg-zinc-400 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
