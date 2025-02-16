const TagView = ({ className = '', tag, ...props }) => {
    return (
        <div
            className={`flex w-fit items-center justify-center rounded-full px-4 py-2 capitalize ${className}`}
            {...props}
        >
            {tag}
        </div>
    );
};

export default TagView;
