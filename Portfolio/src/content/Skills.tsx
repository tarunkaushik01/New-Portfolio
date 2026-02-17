import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import PaletteSharpIcon from '@mui/icons-material/PaletteSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import ViewComfySharpIcon from '@mui/icons-material/ViewComfySharp';

const Skills = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
            >
                <Typography variant='h4' fontWeight={300}>
                    Skills & Expertise
                </Typography>
                <Typography>
                    I work with modern technologies to build scalable and performant applications
                </Typography>
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        gap:2,
                    mt:4

                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", px: 3, py: 2 }}>
                        <CodeIcon fontSize='large' /><br />
                        Front End
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", px: 3, py: 2 }}>
                        <StorageSharpIcon fontSize='large' /><br />
                        Back End
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", px: 3, py: 2 }}>
                        <PaletteSharpIcon fontSize='large' /><br />
                        UI/UX Design
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", px: 3, py: 2 }}>
                        <LanguageSharpIcon fontSize='large' /><br />
                        Web Apps
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", px: 3, py: 2 }}>
                        <ViewComfySharpIcon fontSize='large' /><br />
                        Responsive
                    </Box>
                </Box>
                <Box
                sx={{
                    display:"flex",
                    gap:2,
                    mt:4,
                    flexWrap:"wrap",
                    width:700,
                    justifyContent:"center"
                }}>
                    <Button variant='outlined'>
                        .Net
                    </Button>
                    <Button variant='outlined'>
                        React
                    </Button><Button variant='outlined'>
                        SQL Server
                    </Button><Button variant='outlined'>
                        Figma
                    </Button><Button variant='outlined'>
                        TypeScript
                    </Button><Button variant='outlined'>
                        JavaScript
                    </Button><Button variant='outlined'>
                        Oops
                    </Button><Button variant='outlined'>
                        Desin Patters
                    </Button><Button variant='outlined'>
                        Restful API
                    </Button><Button variant='outlined'>
                        DSA
                    </Button><Button variant='outlined'>
                        Problem Solving
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Skills