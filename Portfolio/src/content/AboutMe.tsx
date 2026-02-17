import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutMe = () => {
  return (
    <>
        <Box
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
        >
            <Box
                sx={{
                    width:700,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    color:"grey"
                }}
            >
                <Typography variant='h4' fontWeight={300} color='black'>
                    About Me
                </Typography>
                <Typography>
                    I'm a passionate full-stack developer with over 5 years of experience building web and mobile applications. I specialize in React, Node.js, and modern web technologies.
                </Typography>
                <br/>
                <Typography>
                    My journey in software development started with a curiosity for how things work behind the scenes. Today, I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
                </Typography>
                <br/>
                <Typography>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default AboutMe