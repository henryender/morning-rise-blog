import { Box, Typography } from '@mui/material'
import React from 'react'
import pic2 from '../assets/pic2.jpg'

const PopularPosts = () => {
    return (
        <div style={{marginBottom:"20px",cursor:'pointer'}} >
            <Typography textAlign='center'
                sx={{ fontSize: { xs: '15px', md: "20px" }, }}>
                Popular Posts
            </Typography>
            <Box sx={{
                backgroundImage: `url(${pic2})`,
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '300px',
                width: "100%",

            }} className='popular'>
                <Box padding='10px' sx={{ position: 'relative', top: '50%' }} >
                    <Typography variant='body2' sx={{ color: "white" }}>31st May, 2023</Typography>
                    <Typography sx={{ color: "white", fontSize: { xs: '20px', md: "20px", lg:"25px" }, }} className='text' >
                        Three things you need to know about Iphones
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default PopularPosts
