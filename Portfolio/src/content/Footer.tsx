import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    mt:5
                }}
            >
                <Typography variant='h4' fontWeight={600}>
                    Let's Work Together
                </Typography>
                <Typography style={{marginTop:"5px"}}>
                    I'm always open to discuss new projects, creative ideas, or opportunities to be a part of your vision
                </Typography>
                <Box
                    sx={{
                        display:"flex",
                        gap:5,
                        mt:5,
                        mb:10
                    }}
                >
                    <Button
                        component="a"
                        href="mailto:tarun@example.com?subject=Portfolio%20Inquiry"
                        variant='contained'
                        color='primary'
                        target='blank'

                        sx={{
                            borderRadius:"15px"
                        }}
                    >
                        Email Me
                    </Button>
                    <Button
                        component="a"
                        href="https://github.com/tarunkaushik01"
                        variant='contained'
                        color='primary'
                        target='blank'
                        sx={{
                            borderRadius:"15px"
                        }}
                    >
                        Github
                    </Button>
                    <Button
                        component="a"
                        href="https://www.linkedin.com/in/tarunkaushik123"
                        variant='contained'
                        color='primary'
                        target='_blank'
                        sx={{
                            borderRadius:"15px"
                        }}
                    >
                        LinkedIn
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default Footer