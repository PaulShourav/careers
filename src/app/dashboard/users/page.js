

import Heading from "@/components/deshboard/Heading";
import UserDatatable from "./UserDatatable";



const UsersPage = () => {


    return (
        <>
            <Heading title={'Add Jods'} hrefUrll={'../users'} />
            <UserDatatable />
        </>
    );
};

export default UsersPage;