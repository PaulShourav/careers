import JobCard from "@/components/home/JobCard";



const HomePage = async() => {
     const res=await fetch('http://localhost:5000/jobs/',{
        cache:'force-cache'
     })
     const jobs=await res.json()
   
    console.log(jobs);
    return (
        <div className="my-container  my-20">
            {jobs?.map((job,index)=><JobCard key={job._id} job={job} indexNo={index}/>)}
        </div>

    );
};

export default HomePage;