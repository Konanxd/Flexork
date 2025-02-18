import JobCard from '@/Components/JobCard';
import SearchBar from '@/Components/SearchBar';
import GuestLayout from '@/Layouts/GuestLayout';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function JobSearch() {
    const { vacancies: initialVacancies } = usePage().props;
    const [vacancies, setVacancies] = useState(initialVacancies);
    const [filters, setFilters] = useState({ keyword: '', jobTypes: [] });

    const fetchVacancies = async (filters) => {
        try {
            const response = await axios.get('/api/search/', {
                params: filters,
            });
            setVacancies(response.data.vacancies);
        } catch (error) {
            console.error('Error fetching vacancies:', error);
        }
    };

    const updateFilters = (newFilters) => {
        setFilters(newFilters);
        fetchVacancies(newFilters);
    };

    return (
        <GuestLayout className="flex h-auto flex-col gap-6 py-6">
            <SearchBar filters={filters} updateFilters={updateFilters} />
            <div className="xs:grid-cols-2 grid w-full gap-4 px-7 drop-shadow-lg md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {vacancies != undefined ? (
                    vacancies.map((vacancy) => (
                        <JobCard key={vacancy.id_vacancy} vacancy={vacancy} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </GuestLayout>
    );
}
