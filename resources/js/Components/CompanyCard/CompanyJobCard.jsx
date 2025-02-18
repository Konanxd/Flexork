import { router } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import TagView from '../TagView';

export default function CompanyJobCard({ vacancy }) {
    console.log(vacancy);
    const tags = vacancy.tags;

    const handleClick = (e) => {
        e.preventDefault();

        router.get(route('penyedia.details', { id: vacancy.id_vacancy }));
    };

    return (
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold uppercase">
                    {vacancy.title_vacancy}
                </h1>
                <span className="text-zinc-500">
                    berakhir pada {vacancy.deadline_vacancy}
                </span>
            </div>
            <div className="flex flex-row gap-2">
                {tags.map((tag) => (
                    <TagView
                        key={tag.id_tag}
                        tag={tag.name_tag}
                        className="border-2 border-red-400 text-red-400"
                    />
                ))}
            </div>
            <div className="rounded-md bg-zinc-100 p-3">
                <p className="line-clamp-5 text-zinc-600">
                    {vacancy.description_vacancy}
                </p>
            </div>
            <PrimaryButton
                onClick={handleClick}
                className="flex flex-row gap-3 bg-zinc-400 py-3 text-white hover:bg-zinc-300"
            >
                <span>lihat daftar pelamar</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                    className="size-5"
                >
                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                </svg>
            </PrimaryButton>
        </div>
    );
}
