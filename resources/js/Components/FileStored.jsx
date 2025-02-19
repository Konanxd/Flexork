const FileStored = ({ filename, size, onDelete, fileUrl }) => {
    return (
        <div className="flex flex-row items-center gap-8 rounded-2xl border-[3px] border-solid border-neutral-400 p-8">
            <a href={fileUrl} className="flex cursor-pointer flex-col">
                <span className="line-clamp-1 w-32 text-lg font-semibold uppercase">
                    {filename}
                </span>
                <span className="text-sm">{size}</span>
            </a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                className="cursor-pointer duration-200 hover:fill-red-500"
                onClick={onDelete}
            >
                <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
            </svg>
        </div>
    );
};

export default FileStored;
