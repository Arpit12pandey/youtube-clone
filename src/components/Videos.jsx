import React from 'react'
import { Stack,Box } from '@mui/material';
import Videocard from './Videocard';
import Channelcard from './Channelcard';

const Videos = ({ Video}) => {
   
  return (
  <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
   { Video.map((item,idx) =>(
<Box key={idx}>
  {item.id.videoId && <Videocard video={item}/>}
 {item.id.channelId && <Channelcard channelDetail={item}/>}

</Box>
    )

        )}
  </Stack>
  )
}

export default Videos
