export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`${className} inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold uppercase transition duration-150 ease-in-out hover:bg-blue-400 ${
                disabled && 'opacity-25'
            } `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
