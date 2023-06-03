import React, { useContext } from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/StateContext';

const Blog = () => {
  //   const truncate = (str, n) => {
  //     return String(str).length > n ? String(str).substring(0, n - 1) + '...'
  //         : str
  // }

  // {truncate(item.itemDescription,40)}
  const { res } = useContext(BlogContext)
  return (
    <>
      <Box>
        {res.map((item) =>
          <div key={item.createdAt}>
            {/* image     */}
            <Box sx={{
              width: '100%',
              height: "300px",
              backgroundImage: `url(${item.coverPhoto.url})`,
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
              backgroundSize: 'cover'
            }} className='blog' >

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
            </Box>

            {/* Title */}
            <Box>
              <Link to={`/blog/${item.slug}`} style={{textDecoration:'none', color:'black'}}>
                <Typography sx={{
                  padding: '5px',
                  textAlign: 'left',
                  fontSize: { xs: '25px', md: "30px" },
                  fontWeight: 'bold'
                }} className='text'>{item.title} </Typography>
              </Link>

            </Box>

            {/*  date ,author,views */}
            <Box sx={{
              padding: "10px", width: "100%",
              margin: "auto",
              display: 'flex',
              justifyContent: "space-evenly"
            }}>
              <Stack direction='row'>
                <Typography
                  sx={{
                    fontSize: { xs: '11px', md: '14px' },
                    fontWeight: 600,
                    marginRight: '2px'
                  }}>By: {item.author.name}
                </Typography>
                <AccountCircleIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: '15px', md: '20px' }
                  }} />
              </Stack>

              <Stack direction='row'>
                <Typography
                  sx={{
                    fontSize: { xs: '11px', md: '13px' },
                    fontWeight: 600,
                    marginRight: '2px'
                  }}>
                  {Math.floor((Math.random() * 100) + 1)}
                </Typography>
                <VisibilityIcon
                  sx={{
                    color: "green",
                    fontSize: { xs: '15px', md: '20px' }
                  }} />
              </Stack>

              <Stack direction='row'>
                <Typography
                  sx={{
                    fontSize: { xs: '11px', md: '13px' },
                    fontWeight: 600,
                    marginRight: '2px'
                  }}>
                  {item.createdAt.slice(0, 10)}

                </Typography>

                <CalendarMonthIcon
                  sx={{
                    color: "blue",
                    fontSize: { xs: '15px', md: '20px' }
                  }} />
              </Stack>
            </Box>

            {/* Brief Excerpt */}
            <Box padding='10px'>
              <Typography variant='body2'>
                {item.excerpt}
                <span>
                  <Link to={`/blog/${item.slug}`} >
                    <Button size='small' sx={{ color: 'blue' }} className='categories'>Read More</Button>
                  </Link></span>
              </Typography>
            </Box>

            <Divider />

          </div>

        )}



      </Box>

    </>
  )
}

export default Blog
