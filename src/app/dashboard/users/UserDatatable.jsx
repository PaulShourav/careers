'use client'

import { useState } from "react";
import DataTable from "react-data-table-component";
import useSWR from "swr";

const UserDatatable = () => {
    

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data:users=[] } = useSWR('http://localhost:5000/users/', fetcher);
    
    console.log(users.data);
    
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.data?.map((user,index)=><tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.email}</td>
                            
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            

        </>
    )
};

export default UserDatatable;