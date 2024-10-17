import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";

const App: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)

    const lift = (data:IUser) => {
        setUser(data)
    }

  return (
      <div className="App">
        <hr/>
          {
              JSON.stringify(user)
          }
        <hr/>
        <Users lift={lift} />

      </div>
  );
}

export default App;
