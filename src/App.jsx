import Navbar from '../src/Components/Navbar/Navbar'
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/SearchBar/Searchbar'
import Jobcard from '../src/Components/JobCard/Jobcard'
function App() {
  return (
    <div className=''>
      <h1 className='Headline bg-slate-500 text-3xl  '></h1>
      <Navbar/>
      <Header/>
      <Search/>
      <Jobcard/>
    </div>
  )
}

export default App
