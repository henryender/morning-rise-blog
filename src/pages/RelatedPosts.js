import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import pic1 from '../assets/pic1.webp'
import pic2 from '../assets/pic2.jpg'
import { BlogContext } from '../context/StateContext'

const RelatedPosts = () => {
  const {text}=useContext(BlogContext)
  return (
    <div style={{ marginBottom: "20px" }}>
      <Box>
        <Typography
          textAlign='center'
          sx={{ fontSize: { xs: '15px', md: "20px" }, padding: "5px" }}>
           {text?"Recent Posts":"Related Posts"}
        </Typography>
      </Box>

      <Box sx={{ padding: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Box sx={{ display: "flex", width: "100%", }}>
              <img src={pic1} alt='pic1' width='40%' className='popular' />
              <Box padding='5px' sx={{ cursor: 'pointer' }}>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px', md: '15px', lg: "18px" } }} className='text'>
                  How to spot fake Iphones
                </Typography>
                <Typography sx={{ fontSize: { xs: '12px', md: '12px' } }}>31st May, 2023</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Box sx={{ display: "flex", width: "100%", }}>
              <img src={pic2} alt='pic1' width='40%' className='popular' />
              <Box padding='5px' sx={{ cursor: 'pointer' }}>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px', md: '15px', lg: "18px" }, }} className='text'>
                  How to spot fake Iphones</Typography>
                <Typography sx={{ fontSize: { xs: '12px', md: '12px' } }}>31st May, 2023</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default RelatedPosts
