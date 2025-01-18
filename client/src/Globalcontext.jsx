﻿import {createContext, useState} from "react";

const GlobalContext = createContext()

function GlobalProvider({children}) {
    const [data, setData] = useState("Data from context");
    const [data2, setData2] = useState("Data2");
    const [users, setUsers] =useState([
        { id: 1, name: 'Anna', age: 25 },
        { id: 2, name: 'Björn', age: 30 },
        { id: 3, name: 'Cecilia', age: 22 }
    ]);

    return <GlobalContext.Provider value={{
        data,
        data2,
        users
    }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider };