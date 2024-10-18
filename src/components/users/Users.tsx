import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import User from "../user/User";


const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        apiService.userService.getAll().then(value => setUsers(value))
    }, [])
    return (
        <div>
            {
                users.map((user:IUser) => (<User item={user} key={user.id}/>))
            }
        </div>
    );
};

export default Users;