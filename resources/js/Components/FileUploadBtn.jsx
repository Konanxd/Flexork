const FileUploadBtn = ({ ...props }) => {
    return (
        <button
            className="cursor-pointer rounded-2xl border-[3px] border-dashed border-neutral-400 p-8"
            {...props}
        >
            <div className="w-48 text-center">
                <h1 className="w-full text-lg font-semibold uppercase">
                    unggah file disini
                </h1>
                <span className="w-full text-center text-sm">
                    ukuran file maksimal 5MB
                </span>
            </div>
        </button>
    );
};

export default FileUploadBtn;
