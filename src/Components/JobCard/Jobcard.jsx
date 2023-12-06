import dayjs from "dayjs";

const Jobcard = () => {
    const skills = ["javascript", "React","NodeJs","Tailwind"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2023-10-01','day')
  return (
    <div className="mx-40 mb-4">
        <div className="flex justify-between items-center px-6 py-4 rounded-md bg-slate-200 border-black shadow-2xl  hover:border-blue-500 hover:translate-y-1 hover:scale-105">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-lg font-semibold">Frontend Developer-Amazon</h1>
                <p>Full Time &#x2022; Fresher &#x2022; In-office</p>
                <div className="flex items-center gap-2">
                    {skills.map((skill)=>(
                        <p key={skill} className="text-gray-600 py-0  rounded-md border border-black p-2"> {skill}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center">
                <p className="text-gray-600">posted {diffInDays} days ago </p>
                <button className="bg-blue-300 p-2 rounded-md shadow-xl hover:bg-blue ">Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Jobcard