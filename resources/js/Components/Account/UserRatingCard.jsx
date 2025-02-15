import PrimaryButton from '../PrimaryButton';

export default function UserRatingCard({ company, position, ...props }) {
    return (
        <div className="flex flex-row items-center justify-between rounded-xl bg-[#F0F0F0] px-5 py-4">
            <div className="flex flex-row gap-5">
                <img
                    src="assets/profile-example.jpg"
                    alt="Profile"
                    className="h-14 w-14 overflow-hidden rounded-full"
                />
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-semibold">{company}</h3>
                    <span className="text-[#5B5B5B]">{position}</span>
                </div>
            </div>
            <PrimaryButton
                className="h-fit w-fit bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400"
                {...props}
            >
                Beri Rating
            </PrimaryButton>
        </div>
    );
}
