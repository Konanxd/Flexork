const TagView = ({ className = '', tag, ...props }) => {
    return (
        <div
            className={`flex w-fit max-w-60 items-center justify-center rounded-full px-4 py-2 capitalize ${className}`}
            {...props}
        >
            <span className="line-clamp-1">{tag}</span>
        </div>
    );
};

export default TagView;
