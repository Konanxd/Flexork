import { Link } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import TagView from '../TagView';
import JobCardHeader from './JobCardHeader';

export default function JobCard({ className = '', vacancy, ...props }) {
    const jobTags = [
        { id_tag: 1, name_tag: 'Developer' },
        { id_tag: 2, name_tag: 'IT' },
        { id_tag: 3, name_tag: 'Food & Beverage' },
        { id_tag: 4, name_tag: 'Mobile Developer' },
        { id_tag: 5, name_tag: 'Data Scientist' },
        { id_tag: 6, name_tag: 'Cyber Security' },
        { id_tag: 7, name_tag: 'DevOps Engineer' },
        { id_tag: 8, name_tag: 'UI/UX Designer' },
        { id_tag: 9, name_tag: 'Project Manager' },
        { id_tag: 10, name_tag: 'Business Analyst' },
        { id_tag: 11, name_tag: 'Product Manager' },
        { id_tag: 12, name_tag: 'Marketing Specialist' },
    ];
    console.log(vacancy);
    return (
        <div
            className={`flex w-full flex-col gap-4 rounded-lg bg-white px-8 py-6 ${className}`}
        >
            <JobCardHeader
                title={vacancy.title_vacancy}
                company={vacancy.company.name_company}
            />
            <div className="flex flex-row gap-2 font-medium text-[#1673DE]">
                <span>
                    {vacancy.salary_vacancy.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 0,
                    })}
                </span>
            </div>
            <div className="flex w-full flex-row gap-2 overflow-clip">
                {jobTags.slice(0, 3).map((tag) => (
                    <TagView
                        key={tag.id_tag}
                        className="bg-gradient-to-tr from-[#4EA5D9] from-10% to-[#44CFCB] to-90% text-white"
                        tag={tag.name_tag}
                    />
                ))}
                {jobTags.length > 3 && (
                    <TagView
                        key="more-tags"
                        className="bg-gray-300 text-white"
                        tag={`+ ${jobTags.length - 3}`}
                    />
                )}
            </div>

            <div className="line-clamp-2 text-sm">
                {vacancy.description_vacancy}
            </div>
            <div className="flex flex-row gap-3">
                <Link
                    href={route('vacancy.details', { id: vacancy.id_vacancy })}
                >
                    <PrimaryButton className="border-2 border-[#1673DE] bg-transparent px-6 text-[#1673DE] hover:bg-[#1673DE] hover:text-white">
                        lihat
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
}
