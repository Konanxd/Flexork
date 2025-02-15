const TagView = ({ className, tag, ...props }) => {
    return (
        <div
            className={`flex w-fit flex-col items-center justify-center rounded-full px-4 py-2 ${className}`}
            {...props}
        >
            {tag}
        </div>
    );
};

export default TagView;
