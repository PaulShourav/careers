import Heading from "@/components/deshboard/Heading";
import AddFrom from "./AddFrom";
import AddandEditForm from "../AddandEditForm";


const AddJobPage = () => {
   
    return (
        <div>
            <Heading title={'Add Jods'} hrefUrll={'../jobs'} btnName={'All Jobs'}/>
            {/* <AddFrom/> */}
            <AddandEditForm/>
        </div>
    );
};

export default AddJobPage;