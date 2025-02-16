import FiveStar from './Account/FiveStar';

export default function ReviewDisplay({ img, name, time, ...props }) {
    return (
        <div
            className="flex w-full flex-row items-center justify-between border-b-2 border-zinc-300 px-5 pb-4"
            {...props}
        >
            <div className="flex flex-row gap-5">
                <div className="size-14 rounded-full bg-zinc-300">
                    <img src={`${img}`} alt="user image" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold capitalize">{name}</span>
                    <span className="text-sm font-medium text-zinc-500">
                        {time}
                    </span>
                </div>
            </div>
            <FiveStar></FiveStar>
        </div>
    );
}
