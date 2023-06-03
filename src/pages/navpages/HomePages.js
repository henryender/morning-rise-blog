import React, { useContext } from 'react'
import { BlogContext } from '../../context/StateContext'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const HomePages = () => {
  const { res } = useContext(BlogContext)
  return (
    <>
      <Box>
        {res.map((item) =>
          <div key={item.CreatedAt} style={{ marginBottom: '20px' }}>
            <Box sx={{
              width: '100%',
              height: "300px",
              backgroundImage: `url(${item.coverPhoto.url})`,
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
              backgroundSize: 'cover',

            }}>
              <Box sx={{
                backgroundColor: 'white',
                width: { xs: '25%', sm: "29%", md: "25%" },
                padding: "5px",
                borderRadius: '50%',
                textAlign: "center",
                position: "relative",
                top: 10, left: 10
              }}>
                <Typography>{item.category}</Typography>
              </Box>
              <Box padding='10px' sx={{ position: 'relative', top: '50%', backgroundColor: 'black' }}>
                <Typography variant='body2' sx={{ color: "white" }}>31st May, 2023</Typography>
                <Link to={`/blog/${item.slug}`} style={{textDecoration:'none'}}>
                  <Typography sx={{ color: "white", fontSize: { xs: '20px', md: "20px", lg: "25px"}, }}
                    className='text' >
                    {item.title}
                  </Typography>
                </Link>

              </Box>
            </Box>

          </div>

        )}
      </Box>
    </>
  )
}

export default HomePages
