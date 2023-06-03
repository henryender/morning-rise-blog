import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { categories } from '../utils/data'

const AllCategories = () => {
    return (
        <div>
            <Box padding='10px'>
                <Typography textAlign='center'
                    sx={{ fontSize: { xs: '15px', md: "20px" }, }}>
                    All Categories
                </Typography>
            </Box>

            <Box width='80%' margin='auto' >
                {categories.map((item) =>
                    <div key={item.id}>
                        <Box
                            padding='10px'
                            display='flex'
                            justifyContent='space-between'
                            className='categories'>

                            <Typography
                                variant='body2'>
                                {item.name}
                            </Typography>
                            <Typography variant='body2'>{Math.floor((Math.random() * 30) + 1)}</Typography>
                        </Box>
                        <Divider />
                    </div>

                )}
            </Box>
        </div>
    )
}

export default AllCategories
