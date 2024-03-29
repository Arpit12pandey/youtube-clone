import React from 'react';
import { useState,useEffect } from 'react';
import {Box,Stack,Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../Utils/Fetchfromapi';

const Feed = () => {
 const [SelectedCategory,setselectedcategory]=useState('New');
 const[Video,SetVideo]=useState([]);

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data)=>SetVideo(data.items))
  },[SelectedCategory])
  return (
   <Stack sx={{flexDirection:{
    sx:"column",md:"row"
   }}}>
    <Box  sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx: 0, md:2}}}>
     < Sidebar SelectedCategory={SelectedCategory} setselectedcategory={setselectedcategory}/>
      <Typography className='copyright'  sx={{mt:1.5,color:'#fff'}}>
        copyright 2022 JSM media
      </Typography>

    </Box>
    <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:2}}>
      <Typography variant='h4'fontWeight={'bold'} mb={2} sx={{color:'white'}}>
       {SelectedCategory}<span style={{color:'#F31503'}}>Videos</span>
      </Typography>
     <Videos Video ={Video}/>
    </Box>
   </Stack>
  )
}

export default Feed
