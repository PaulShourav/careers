import Heading from "@/components/deshboard/Heading";
import JobsTable from "./JobsTable";


const JobsPage = () => {
    return (
        <div>
            <Heading title={"Jobs"} hrefUrll={'jobs/add'} btnName={"Add Job"}/>
           <JobsTable/>
        </div>
    );
};

export default JobsPage;