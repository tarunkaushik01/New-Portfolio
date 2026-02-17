import { DisplaySettings } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <>
        <Box
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
        >
            <Typography variant='h4'
            >
                Featured Porjects
            </Typography>
        </Box>
    </>
  )
}

export default Projects