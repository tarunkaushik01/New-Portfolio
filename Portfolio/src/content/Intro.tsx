import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Intro = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant='h5'>
                    Hi, I’m Tarun 👋
                </Typography>
                <br></br>
                <Typography>
                    Full-Stack Developer & Creative Problem Solver
                </Typography>
                <Typography>
                    I build modern web applications with a focus on user experience, performance, and clean code. Passionate about turning ideas into reality through technology.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >
                    <Button
                        variant='contained'
                    >
                        View My Work
                    </Button>
                    <Button
                        variant='outlined'
                    >
                        Get In Touch
                    </Button>

                </Box>
                </Box>
            </>
            )
}

            export default Intro