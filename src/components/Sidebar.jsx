import React from 'react';
import {Stack} from '@mui/material';
import { categories } from '../Utils/Constants';
import { Opacity } from '@mui/icons-material';



const Sidebar = ({SelectedCategory,setselectedcategory}) => {
  return (
    <Stack
    direction="row"
     sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'}
     }}>
        {categories.map((category)=>(
            <button className='category-btn'
            onClick={()=>{setselectedcategory(category.name)}}
            style={{
                background:category.name===SelectedCategory &&'#FC1503',color:'white'
            }}>
                <span style={{color:category.name===SelectedCategory ?'white':'red',marginRight:'15px'}}>{category.icon}</span>
                 <span  style={{Opacity:category.name===SelectedCategory ?'1':'0'}}>{category.name}</span>
            </button>
        ))}
     </Stack>
  )
}

export default Sidebar
