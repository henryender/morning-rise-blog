import React from 'react'
import { Box, Toolbar, Grid } from '@mui/material';
import Posts from "../pages/navpages/Posts"
import HomePages from "../pages/navpages/HomePages"
import Blog from "../pages/navpages/Blog"
import Contact from "../pages/navpages/Contact"
import { Route, Routes } from 'react-router-dom';
import RelatedPosts from './RelatedPosts'
import AllCategories from './AllCategories';
import PopularPosts from './PopularPosts';

const drawerWidth = 240

const Pages = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={7} lg={7} className='side'>
            <Routes>
              <Route path='/' element={<HomePages />} />
              <Route path='blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blog/:slug' element={<Posts />} />
            </Routes>

          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5} >
            <div className='side'> 
              <Box padding='5px'>
                <PopularPosts />
                <RelatedPosts />
                <AllCategories />
              </Box>
            </div>

          </Grid>
        </Grid>
      </Box>


    </Box>
  )
}

export default Pages
