const FileFixed = () => {
    return (
        <div className="flex flex-col items-start gap-4 rounded-2xl border-[3px] border-solid border-neutral-400 p-8">
            <span className="line-clamp-1 w-full max-w-52 text-lg font-semibold uppercase">
                nama file yang panjang CV.pdf
            </span>
            <span className="text-sm">5MB</span>
        </div>
    );
};

export default FileFixed;
