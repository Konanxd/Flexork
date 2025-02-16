export default function JobCardHeader({ title, company, ...props }) {
    return (
        <div className="flex flex-col gap-1.5" {...props}>
            <h1 className="flex flex-col gap-2 text-2xl font-semibold capitalize">
                {title}
            </h1>
            <p className="text-[#9F9F9F]">{company}</p>
        </div>
    );
}
