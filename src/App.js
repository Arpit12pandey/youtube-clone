import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Videodetail from './components/Videodetail';
import Searchfeed from './components/Searchfeed';
import Channeldetails from './components/Channeldetails';


const App = () => {
  return (
   <BrowserRouter>
   <Box sx={{backgroundColor:'#000'}}>
   <Navbar/>
    <Routes>
    <Route path="/" exact element ={<Feed/>}/>
    <Route path="/video/:id"  element ={<Videodetail/>}/>
    <Route path="/channel/:id"  element ={<Channeldetails/>}/>
    <Route path="/search/:searchTerm"  element ={<Searchfeed/>}/>
    </Routes>
   </Box>
   </BrowserRouter>
  )
}

export default App
