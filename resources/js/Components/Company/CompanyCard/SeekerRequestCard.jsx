import PrimaryButton from '../../PrimaryButton';

export default function SeekerRequestCard({ nama, image }) {
    return (
        <div className="flex w-full flex-row items-center justify-between gap-3 rounded-md bg-white p-4">
            <div className="flex flex-row items-center gap-3">
                <img
                    src={image}
                    alt=""
                    className="size-10 rounded-full bg-zinc-400"
                />
                <p className="text-lg font-medium capitalize">{nama}</p>
            </div>
            <div className="flex flex-row items-center gap-3">
                <PrimaryButton className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    tolak
                </PrimaryButton>
                <PrimaryButton className="bg-[#1673DE] text-white">
                    terima
                </PrimaryButton>
            </div>
        </div>
    );
}
