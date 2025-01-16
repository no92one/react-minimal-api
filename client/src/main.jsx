import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)

function Home() {
    return <>
        <h1>Home</h1>
    </>
}
