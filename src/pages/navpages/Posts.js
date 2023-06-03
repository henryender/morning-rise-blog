import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Posts = () => {
  const { slug } = useParams();
  const [item, setItem] = useState([])
  const [info, setInfo] = useState({
    name: '', username: '', reply: ''
  })

  const [comment, setComment] = useState([])

  function fname(event) {
    setInfo({ ...info, name: event.target.value })
  }
  function username(event) {
    setInfo({ ...info, username: event.target.value })
  }
  function reply(event) {
    setInfo({ ...info, reply: event.target.value })
  }

  function handleAddComment() {
    if (info.name!==''&info.username!==''&info.reply!=='') {
      setComment([...comment,
      {
        id: comment.length,
        Name: info.name,
        Username: info.username,
        Reply: info.reply
      }]);
      setInfo({
        name: '', username: '', reply: ''
      })
    }

  }


  useEffect(() => {
    const query = `query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        author {
          name
          avatar {
            url
          }
        }
        category
        coverPhoto {
          url
        }
        createdAt
        content {
          html
        }
        title
      }
    }`
    const variables = {
      slug: slug
    }

    async function getBlogDetails() {
      await axios.request({
        url: 'https://api-ca-central-1.hygraph.com/v2/cldxigriy0bqs01ui80mw3j2f/master',
        method: 'POST',
        data: { query, variables }
      }).then((res) => {
        setItem(res.data.data.post)
      })
    }

    getBlogDetails()


  }, [slug])


  return (
    <>
      <Box>

        <div >
          {/* image     */}
          <Box sx={{
            width: '100%',
            height: "300px",
            backgroundImage: `url(${item.coverPhoto?.url})`,
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover'
          }} >

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
            <Typography sx={{
              padding: '5px',
              textAlign: 'center',
              fontSize: { xs: '25px', md: "30px" },
              fontWeight: 'bold'
            }}>{item.title}</Typography>
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
                  fontSize: { xs: '12px', md: '14px' },
                  fontWeight: 600,
                  marginRight: '2px'
                }}>By: {item.author?.name}
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
                  fontSize: { xs: '12px', md: '13px' },
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
                  fontSize: { xs: '12px', md: '13px' },
                  fontWeight: 600,
                  marginRight: '2px'
                }}>
                {item.createdAt?.slice(0, 10)}

              </Typography>

              <CalendarMonthIcon
                sx={{
                  color: "blue",
                  fontSize: { xs: '15px', md: '20px' }
                }} />
            </Stack>
          </Box>

          {/* Brief Excerpt */}
          <Box padding='10px' >

            <p dangerouslySetInnerHTML={{ __html: item.content?.html }} className='content'>

            </p>
          </Box>
        </div>

        {/* Leave a reply */}
        <Box sx={{ width: '90%', margin: 'auto', padding: "10px" }}>
          <Typography textAlign='center'
            sx={{ fontSize: { xs: '15px', md: "20px" }, }}>
            Leave a reply
          </Typography>
          <Box sx={{ padding: '10px' }}>
            <TextField
              fullWidth label="Name"

              sx={{ marginBottom: '15px' }} onChange={fname} value={info.name} />

            <TextField fullWidth
              label="Username"
              sx={{ marginBottom: '15px' }} onChange={username} value={info.username} />

            <textarea className='textarea' onChange={reply} value={info.reply}></textarea>

            <Button variant='contained' 
            onClick={handleAddComment} 
            size='small' sx={{marginTop:'5px'}}>Add Comment</Button>
          </Box>

          {/* Comment section */}
          <Box sx={{ padding: "10px" }}>
            <Box>
              <Typography textAlign='center'
                sx={{ fontSize: { xs: '15px', md: "20px" }, marginBottom: '10px' }}>
                Comments
              </Typography>
            </Box>

            {comment.map((item) =>
              <Box padding='5px'>
                <>
                  <Box width='100%' display='flex' alignItems='center'>
                    <AccountCircleIcon
                      sx={{ color: "red", fontSize: { xs: '15px', md: '20px' }, marginRight: '3px' }} />
                    <Typography sx={{ fontSize: '15px', marginRight: '5px' }}>
                      {item.Name};
                    </Typography>
                    <Typography sx={{ fontSize: '14px', marginRight: '15px' }}>@{item.Username};</Typography>
                    <Typography sx={{ fontSize: '11px' }}>Posted justnow</Typography>

                  </Box>
                  <Typography variant='body2' sx={{ marginLeft: '20px' }}>{item.Reply}</Typography>
                </>


              </Box>
            )}
            <Box padding='5px' marginTop='5px'>
              <Box width='100%' display='flex' alignItems='center'>
                <AccountCircleIcon
                  sx={{ color: "red", fontSize: { xs: '15px', md: '20px' }, marginRight: '3px' }} />
                <Typography sx={{ fontSize: '15px', marginRight: '5px' }}>
                  Henry Bana;
                </Typography>
                <Typography sx={{ fontSize: '14px', marginRight: '15px' }}>@banaH;</Typography>
                <Typography sx={{ fontSize: '11px' }}>Posted 5 hours ago</Typography>

              </Box>
              <Typography variant='body2' sx={{ marginLeft: '20px' }}>I love this post</Typography>
            </Box>

            <Box marginTop='5px' padding='5px'>
              <Box width='100%' display='flex' alignItems='center'>
                <AccountCircleIcon
                  sx={{ color: "green", fontSize: { xs: '15px', md: '20px' }, marginRight: '3px' }} />
                <Typography sx={{ fontSize: '15px', marginRight: '5px' }}>
                  Mary Jane;
                </Typography>
                <Typography sx={{ fontSize: '14px', marginRight: '15px' }}>@jane;</Typography>
                <Typography sx={{ fontSize: '11px' }}>Posted 5 days ago</Typography>

              </Box>
              <Typography variant='body2' sx={{ marginLeft: '20px' }}>Always a good read</Typography>
            </Box>

            <Box marginTop='5px' padding='5px'>
              <Box width='100%' display='flex' alignItems='center'>
                <AccountCircleIcon
                  sx={{ color: "purple", fontSize: { xs: '15px', md: '20px' }, marginRight: '3px' }} />
                <Typography sx={{ fontSize: '15px', marginRight: '5px' }}>
                  Monica Jesse;
                </Typography>
                <Typography sx={{ fontSize: '14px', marginRight: '15px' }}>@jesse;</Typography>
                <Typography sx={{ fontSize: '11px' }}>Posted 2weeks ago</Typography>

              </Box>
              <Typography variant='body2' sx={{ marginLeft: '20px' }}>Reminds me of last year</Typography>
            </Box>

          </Box>

        </Box>
      </Box>


    </>
  )
}

export default Posts
