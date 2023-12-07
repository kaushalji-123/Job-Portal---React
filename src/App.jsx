import Navbar from '../src/Components/Navbar/Navbar'
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/SearchBar/Searchbar'
import Jobcard from '../src/Components/JobCard/Jobcard'
import { useEffect, useState } from "react";
import { collection, query,where, orderBy, getDocs } from "firebase/firestore";
import {db} from './firebase.config'
function App() {

  const [jobs, setJobs] = useState([]);
// Fetching the data from Firebase  

  const fetchJobs = async() =>{

    // tempJob Array for pushing here the Firebase Data in Array Form

    const tempJobs = []
    const JobsRef = query(collection(db,"Jobs"));

    // orderBy used for arrange the data in Desending Order using 'PostedOn' Date 

    const q = query(JobsRef, orderBy("postedOn" ,"desc"));
    const req = await getDocs(q);
    req.forEach((job)=>{
      tempJobs.push(
        {...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  }
  

  const fetchJobsCustom = async(jobCritaria ) =>{ 

    // tempJob Array for pushing here the Firebase Data in Array Form

    const tempJobs = []
    const  JobsRef = query(collection(db,"Jobs"));
    // orderBy used for arrange the data in Desending Order using 'PostedOn' Date 
    const q = query(JobsRef,  where("jobtype","==",jobCritaria.jobtype),  where("title","==",jobCritaria.title),   where("experience","==",jobCritaria.experience), where("location","==",jobCritaria.location), orderBy("postedOn" ,"desc"));
    const req = await getDocs(q);
    req.forEach((job)=>{
      tempJobs.push(
        {...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  }

  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div className=''>
      <h1 className='Headline bg-slate-500 text-3xl  '></h1>
      <Navbar/>
      <Header/>
      <Search fetchJobsCustom ={fetchJobsCustom}/>
      {jobs.map((job)=>(
      <Jobcard key={job.id}{...job} />
      ))}
    </div>
  )
}

export default App
