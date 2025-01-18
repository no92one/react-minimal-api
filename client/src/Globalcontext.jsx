import {createContext, useState} from "react";

const GlobalContext = createContext()

function GlobalProvider({children}) {
    const [data, setData] = useState("Data from context");
    const [data2, setData2] = useState("Data2");

    return <GlobalContext.Provider value={{
        data,
        data2
    }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider };