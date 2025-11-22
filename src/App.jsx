import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import { WatchList } from "./Pages/WatchList";
import { WatchListProvider } from "./Context/WatchListcontext";

const App = () => {
  return (
    <WatchListProvider>
      <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/watchlist" element={<WatchList/>}/>
    {/* <Route path="/" element={<Home/>}/> */}
    </Routes>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App