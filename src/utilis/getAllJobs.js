
import useSWR from "swr";


const getAllJobs = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: jobs = [],mutate } = useSWR('http://localhost:5000/jobs', fetcher);
    return {jobs,mutate}
};

export default getAllJobs;