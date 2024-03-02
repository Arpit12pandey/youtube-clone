import React from 'react';
import { useState,useEffect } from 'react';
import {Box,Typography} from '@mui/material';
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../Utils/Fetchfromapi';

const Searchfeed = () => {
 const[Video,SetVideo]=useState([]);
 const {searchTerm}=useParams();

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>SetVideo(data.items))
  },[searchTerm])
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:2}}>
      <Typography variant='h4'fontWeight={'bold'} mb={2} sx={{color:'white'}}>
      Search Results for <span style={{color:'#F31503'}}>{searchTerm}</span>
      </Typography>
     <Videos Video ={Video}/>
    </Box>
  )
}

export default Searchfeed;
