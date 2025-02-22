export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium uppercase transition duration-150 ease-in-out hover:bg-blue-400 ${className} ${
                disabled && 'opacity-2'
            } `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
