import Navbar from '../src/Components/Navbar/Navbar'
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/SearchBar/Searchbar'
import Jobcard from '../src/Components/JobCard/Jobcard'
import Jobsdata from './Jobstore'
import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import {db} from './firebase.config'
function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() =>{
    const tempJobs = []
    const JobsRef = query(collection(db,"Jobs"));
    const q = query(JobsRef, orderBy("postedOn" ,"desc"));
    const req = await getDocs(q);
    req.forEach((job)=>{
      tempJobs.push(
        {...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      });
      setJobs(tempJobs);
    });
  }
  
  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div className=''>
      <h1 className='Headline bg-slate-500 text-3xl  '></h1>
      <Navbar/>
      <Header/>
      <Search/>
      {jobs.map((job)=>(
      <Jobcard key={job.id}{...job} />
      ))}
    </div>
  )
}

export default App
