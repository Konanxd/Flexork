import { useEffect, useRef, useState } from 'react';
import TextInput from './TextInput';

export default function SearchBar({
    className = '',
    filters,
    updateFilters,
    onClick,
}) {
    const [searchText, setSearchText] = useState(filters.keyword || '');
    const [selectedJobTypes, setSelectedJobTypes] = useState(
        filters.jobTypes || '',
    );
    const [FilterOpen, SetFilterOpen] = useState(false);
    const filterRef = useRef(null);

    const jobTypes = [
        'Penulisan',
        'Pengajar',
        'Kesenian',
        'Bengkel',
        'Food and Business',
        'Asisten',
        'Penjaga Toko/Stand',
        'Teknisi',
        'Desain',
        'Dubbing',
        'Crew',
        'Kerajinan',
        'IT',
        'Sales',
        'Admin',
        'Konveksi',
        'Media Sosial',
        'Driver',
        'Talenta',
        'Entertainment',
    ];

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        updateFilters({ ...filters, keyword: e.target.value });
    };

    // Handle job type selection
    const handleJobTypeChange = (jobType) => {
        const updatedJobTypes = selectedJobTypes.includes(jobType)
            ? selectedJobTypes.filter((type) => type !== jobType)
            : [...selectedJobTypes, jobType];

        setSelectedJobTypes(updatedJobTypes);
        updateFilters({ ...filters, jobTypes: updatedJobTypes });
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target)
            ) {
                SetFilterOpen(false);
            }
        }
        if (FilterOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [FilterOpen]);

    return (
        <div
            className={`relative flex w-full max-w-[1400px] flex-row px-10 ${className}`}
            ref={filterRef}
        >
            {/* Button Filter */}
            <button
                className={`flex flex-row items-center gap-2 px-5 py-2 uppercase text-white transition-all ${
                    FilterOpen ? 'bg-[#7F7F7F]' : 'bg-[#9F9F9F]'
                }`}
                onClick={() => SetFilterOpen(!FilterOpen)}
            >
                filter
                {/* Rotate SVG dynamically */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`size-2.5 transition-transform duration-300 ${
                        FilterOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="currentColor"
                >
                    <path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017Z"></path>
                </svg>
            </button>

            {/* Dropdown Filter */}
            {FilterOpen && (
                <div className="absolute left-0 top-14 z-50 w-full bg-white px-10 py-6 drop-shadow-lg">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold">Hari Kerja</h1>
                        <div className="grid grid-cols-4 gap-2">
                            {jobTypes.map((job, index) => (
                                <label
                                    key={index}
                                    className="flex w-fit items-center gap-2 text-gray-600"
                                >
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-400"
                                        checked={selectedJobTypes.includes(job)}
                                        onChange={() =>
                                            handleJobTypeChange(job)
                                        }
                                    />
                                    {job}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Search Input */}
            <TextInput
                className="w-full rounded-none border-transparent bg-white drop-shadow-none"
                placeholder="Saya Mencari Lowongan Kerja....."
                onChange={handleSearchChange}
            />

            {/* Search Button */}
            <button
                onClick={onClick}
                className="flex flex-row items-center gap-2 bg-[#9F9F9F] px-6 py-2 uppercase text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="currentColor"
                >
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
                cari
            </button>
        </div>
    );
}
