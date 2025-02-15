import JobCard from '@/Components/JobCard/JobCard';
import SearchBar from '@/Components/SearchBar';
import GuestLayout from '@/Layouts/GuestLayout';

export default function JobSearch() {
    const jobData = {
        title: 'Intern Programmer',
        company: 'PT. Lintas Fortuna Nusantara',
        maxSalary: 1000000,
        minSalary: 500000,
        tag: 'Computer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maiores officia cumque molestiae corrupti mollitia eligendi doloremque saepe magni necessitatibus suscipit sequi adipisci blanditiis delectus unde natus, impedit quo sed.',
    };

    return (
        <GuestLayout className="flex h-full flex-col gap-6 p-6">
            <SearchBar className="" />
            <div className="xs:grid-cols-2 grid w-full gap-4 px-7 drop-shadow-lg md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                <JobCard {...jobData} />
            </div>
        </GuestLayout>
    );
}
