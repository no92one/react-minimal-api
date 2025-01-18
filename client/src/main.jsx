import { StrictMode, useContext} from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import { GlobalProvider, GlobalContext } from "./Globalcontext.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalProvider>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<UserList />} />
                  {/*<Route path="/thred/create" element={<CreateThred />} />*/}
                  <Route path="/thred/:id" element={<Thred />} />
              </Routes>
          </BrowserRouter>
      </GlobalProvider>
  </StrictMode>,
)

function Navbar() {
    const {data, data2} = useContext(GlobalContext)
    return <nav>
        <h1>{data}</h1>
        <h2>{data2}</h2>
    </nav>
}

function UserList() {
    const users = [
        { id: 1, name: 'Anna', age: 25 },
        { id: 2, name: 'Björn', age: 30 },
        { id: 3, name: 'Cecilia', age: 22 }
    ];

    return <>
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <h2>{user.name}</h2>
                    <p>Ålder: {user.age}</p>
                </div>
            ))}
        </div>
    </>;
}

function Home() {
    return <>
        <h1>Home</h1>
    </>
}

function Thred(){
    const data = [
        {
            message: "Message lorem ipsum",
            user: {
                username: "User_1",
                joined: new Date(2025, 1, 9)
            },
            time: new Date("January 16, 2025 16:21:00")
        },
        {
            message: "Message 2 lorem ipsum",
            user: {
                username: "User_2",
                joined: new Date(2025, 1, 10)
            },
            time: new Date("January 16, 2025 16:22:00")
        },
        {
            message: "Message 3 lorem ipsum",
            user: {
                username: "User_3",
                joined: new Date(2025, 1, 11)
            },
            time: new Date("January 16, 2025 16:23:00")
        }
    ]
    
    return <>
        <h2>Topic</h2>
        <section aria-label={"message-list"}>
            {data.map( (item, key) => <Message 
                key={key}
                message={item.message} 
                user={item.user}
                time={item.time}
                />
            )}
        </section>
    </>
}

function Message({message, user, time}) {
    const timeString = time.get
    return <>
        <div class={"messageBox"}>
            <p>{message}</p>
            <div aria-label={"user-info"}>
                <p>{user.username}, <span>{user.joined.toDateString()}</span></p>
            </div>
            <time>{time.toDateString()}</time>
        </div>
    </>
}

function CreateThred() {
    return <>

    </>
}


function MultiState() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <p>Name: {name}, Age: {age}</p>
        </>
    );
}