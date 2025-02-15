const MyAccountDesc = ({ title, children, className = '', ...props }) => {
    return (
        <div>
            <div className="flex w-full flex-col gap-3">
                <h1 className="text-2xl font-medium capitalize">{title}</h1>
                <span
                    {...props}
                    className={
                        'fill-neutral-500 px-2 text-neutral-500 ' + className
                    }
                >
                    {children}
                </span>
            </div>
        </div>
    );
};

export default MyAccountDesc;
