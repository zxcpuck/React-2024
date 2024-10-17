import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../User";

type IUsersProps = {
    lift:(user:IUser)=>void
}
const Users:FC<IUsersProps> = ({lift}) => {

    let [users, setUsers ]= useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then((response:IUser[]) => {
                setUsers(response)
            })
    },[])

    return (
        <div>
            {
                users.map((value:IUser) => <User lift={lift} user={value} key={value.id}/>)

            }
        </div>
    );
};

export default Users;