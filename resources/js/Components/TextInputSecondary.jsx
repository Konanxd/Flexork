export default (function InputTextSecondry({
    type = 'text',
    className = '',
    ...props
}) {
    return (
        <div className="">
            <input
                {...props}
                type={type}
                className={
                    'w-full border-2 border-zinc-300 placeholder:text-zinc-400' +
                    className
                }
            />
        </div>
    );
});

// export default InputTextSec();
