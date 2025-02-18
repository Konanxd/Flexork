import PrimaryButton from '../PrimaryButton';

export default function UserRatingCard({ company, position, ...props }) {
    return (
        <div className="flex flex-col items-start justify-between gap-5 rounded-xl bg-[#F0F0F0] px-5 py-4 lg:flex-row lg:items-center">
            <div className="flex w-full flex-row gap-5 lg:w-[70%]">
                <img
                    src="assets/profile-example.jpg"
                    alt="Profile"
                    className="size-14 overflow-hidden rounded-full"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <h3 className="text-lg font-semibold">{company}</h3>
                    <span className="text-[#5B5B5B]">{position}</span>
                </div>
            </div>
            <PrimaryButton
                className="h-fit w-full bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400 lg:w-fit"
                {...props}
            >
                Beri Rating
            </PrimaryButton>
        </div>
    );
}
