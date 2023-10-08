import { FaCircleInfo } from "react-icons/fa6";

const JobCard = ({job,indexNo}) => {
    const {_id,title,experience,salary}=job 
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center   bg-gray-300 p-4 rounded-lg mb-6">
            <div>
                <p className="font-bold border border-indigo-400 rounded-full p-3">{indexNo+1}</p>
            </div>
            <div className="flex-grow my-3 md:ms-7">
                <p className="font-bold text-xl">{title}</p>
                <p>Salary : Tk. {salary} ( Negotiable )</p>
                <p>Experience : {experience || 'Na'}</p>
            </div>
            <div>
                <button className="btn btn-sm btn-primary"><FaCircleInfo/> View Job</button>
            </div>
        </div>
    );
};

export default JobCard;