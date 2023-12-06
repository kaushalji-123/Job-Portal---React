import { useState } from "react"
const Searchbar = (props) => {

    const [jobcritaria,setJobcritaria] = useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })
    const handleChange = (e)=>{
        setJobcritaria((prevStates) =>{
            return{
               ...prevStates,
               [e.target.name]:e.target.value
            }
        })
    }
    console.log(jobcritaria);

    const search = async()=>{
        await props.fetchJobsCustom(jobcritaria);
    }
  
  return (
    <div className="flex gap-4 my-10 justify-center px-10 ">
        <select onChange={handleChange} name="title" value={jobcritaria.title} className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
            <option value="" selected disabled hidden>Job Role</option>
            <option value="ios Developer">ios Developer</option>
            <option value="Android Develope">Android Developer</option>
            <option value="React Developer">React Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option> 
        </select> 
        <select onChange={handleChange}  name="type" value={jobcritaria.type}  className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
            <option value="" selected disabled hidden>Job Type</option>
            <option value="Full-Timerr">Full-Timer</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>

        </select> 
        <select onChange={handleChange}  name="location" value={jobcritaria.location}  className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
            <option value="" selected disabled hidden>Location</option>
            <option value="In-Office">In-Office</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
        </select> 
        <select onChange={handleChange}  name="experience" value={jobcritaria.experience}  className="w-64 py-3 pl-4 bg-zinc-300 font-semibold rounded-md">
            <option value="" selected disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior-Level">Senior-Level</option>
        </select> 
        <button onClick={search} className="w-64 bg-blue-600 text-white font-bold py-3 rounded-md hover:to-blue-900 hover:translate-y-1 hover:scale-95">Search</button>
    </div>
  )
}

export default Searchbar