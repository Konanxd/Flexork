import { useState } from 'react';

export default function VacancyForm() {
    const [jobdesk, setJobdesk] = useState([]);
    const [benefits, setBenefits] = useState([]);

    const addJobdesk = () => setJobdesk([...jobdesk, '']);
    const addBenefit = () => setBenefits([...benefits, '']);

    const handleJobdeskChange = (index, value) => {
        const updatedJobdesk = [...jobdesk];
        updatedJobdesk[index] = value;
        setJobdesk(updatedJobdesk);
    };

    const handleBenefitChange = (index, value) => {
        const updatedBenefits = [...benefits];
        updatedBenefits[index] = value;
        setBenefits(updatedBenefits);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            title_vacancy: 'Barista Part Time',
            jobdesk_vacancy: jobdesk, // Send as JSON
            benefit_vacancy: benefits, // Send as JSON
        };

        console.log('Vacancy created:', formData);

        // axios.post('/vacancies', formData).then((response) => {
        //     console.log('Vacancy created:', response.data);
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Jobdesk</h3>
            {jobdesk.map((task, index) => (
                <input
                    key={index}
                    type="text"
                    value={task}
                    onChange={(e) => handleJobdeskChange(index, e.target.value)}
                    placeholder="Enter job task"
                />
            ))}
            <button type="button" onClick={addJobdesk}>
                + Add Jobdesk
            </button>

            <h3>Benefits</h3>
            {benefits.map((benefit, index) => (
                <input
                    key={index}
                    type="text"
                    value={benefit}
                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                    placeholder="Enter benefit"
                />
            ))}
            <button type="button" onClick={addBenefit}>
                + Add Benefit
            </button>

            <button type="submit">Submit</button>
        </form>
    );
}
