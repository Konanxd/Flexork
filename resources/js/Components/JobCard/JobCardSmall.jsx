import TagView from '../TagView';

export default function JobCardSmall({
    title,
    company,
    desc,
    maxSalary,
    minSalary,
    tag,
    ...props
}) {
    return (
        <div className="flex w-full min-w-[300px] flex-col gap-2.5 rounded-lg border-2 border-[#1673DE] bg-white px-5 py-5">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-base font-semibold capitalize">
                        {title}
                    </h1>
                    <div className="flex flex-row gap-2 text-xs font-medium text-[#1673DE]">
                        <span>Rp. {minSalary}</span>
                        <span>-</span>
                        <span>Rp. {maxSalary}</span>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="border-1 size-6 h-full fill-[#9F9F9F]"
                >
                    <path d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path>
                </svg>
            </div>
            <div className="flex w-full flex-row gap-2 overflow-clip">
                <TagView
                    className="items-center border-2 border-red-400 px-2.5 py-1.5 text-xs font-medium text-red-400"
                    tag={tag}
                ></TagView>
            </div>
            <div className="line-clamp-2 text-xs">{desc}</div>
        </div>
    );
}
