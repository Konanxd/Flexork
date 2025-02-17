export default function ApplyButton({ className = '', status, ...props }) {
    let children = 'lamar';
    let styling = 'transition duration-150 ease-in-out hover:bg-blue-400';
    let isDisabled = false;
    if (status == 'pending') {
        styling =
            'bg-[#1673DE] transition duration-150 ease-in-out hover:bg-blue-400';
        children = 'batalkan';
    } else if (status == 'accepted') {
        styling = 'bg-[#56BE61]';
        isDisabled = true;
        children = 'diterima';
    } else if (status == 'rejected') {
        styling = 'bg-[#F16F6F]';
        isDisabled = true;
        children = 'ditolak';
    }
    return (
        <button
            {...props}
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium uppercase ${styling} ${className}`}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}
