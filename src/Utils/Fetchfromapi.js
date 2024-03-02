import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'f5b69a1388mshfc64d4d19e9e840p152665jsnb3c2a2aa070d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  export const fetchFromAPI=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
  }