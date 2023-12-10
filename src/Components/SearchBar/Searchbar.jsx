import { useState } from "react";

const Searchbar = (props) => {
    const [jobCritaria, setJobCritaria] = useState({
        title: "",
        location: "",
        experience: "",
        jobtype: "",
    });

    const handleChange = (e) => {
        setJobCritaria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const search = async () => {
        try {
            await props.fetchJobsCustom(jobCritaria);
        } catch (error) {
            console.error('Error fetching custom jobs:', error);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:my-10 sm:px-10">
            <select onChange={handleChange} name="title" value={jobCritaria.title} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled hidden>Job Role</option>
                <option value="ios Developer">iOS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="React Developer">React Developer</option>
            </select>
            <select onChange={handleChange} name="jobtype" value={jobCritaria.jobtype} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCritaria.location} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled hidden>Location</option>
                <option value="InOffice">In-Office</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCritaria.experience} className="w-full sm:w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
                <option value="" disabled hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={search} className="w-full sm:w-64 bg-blue-600 text-white font-bold py-3 rounded-md hover:to-blue-900 hover:translate-y-1 hover:scale-95">Search</button>
        </div>
    );
};

export default Searchbar;
