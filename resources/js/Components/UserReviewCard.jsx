import FiveStar from './Account/FiveStar';

export default function UserReviewCard({ nama, date }) {
    return (
        <div className="px-6">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                    <img
                        src=""
                        alt=""
                        className="size-14 overflow-hidden rounded-full bg-zinc-500"
                    />
                    <div className="flex flex-col gap-1.5">
                        <span className="font-semibold capitalize">{nama}</span>
                        <span className="text-zinc-500">{date} month ago</span>
                    </div>
                </div>
                <FiveStar />
            </div>
        </div>
    );
}
