import React from "react";
import { Typography, Box, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PaletteIcon from "@mui/icons-material/Palette";
import LanguageIcon from "@mui/icons-material/Language";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const skillsCards = [
    { icon: <CodeIcon fontSize="large" />, label: "Front-End" },
    { icon: <StorageIcon fontSize="large" />, label: "Back-End" },
    { icon: <PaletteIcon fontSize="large" />, label: "UI / UX" },
    { icon: <LanguageIcon fontSize="large" />, label: "Web Apps" },
    { icon: <ViewComfyIcon fontSize="large" />, label: "Responsive Design" },
];

const techStack = [
    ".NET",
    "ASP.NET Core",
    "React",
    "SQL Server",
    "TypeScript",
    "JavaScript",
    "REST APIs",
    "Design Patterns",
    "OOPs",
    "DSA",
    "Problem Solving",
    "Figma",
];

const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 8, md: 7 },
                px: { xs: 2, md: 6 },
                backgroundColor: "#f9fafb",
                textAlign: "center",
            }}
        >
            {/* TITLE */}
            <Typography variant="h4" fontWeight={600} mb={1}>
                Skills & Expertise
            </Typography>

            <Typography
                sx={{
                    color: "text.secondary",
                    maxWidth: "600px",
                    mx: "auto",
                }}
            >
                I work with modern technologies to build scalable, maintainable, and
                high-performance applications.
            </Typography>

            {/* SKILL CARDS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr 1fr",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(5, 1fr)",
                    },
                    gap: 3,
                    mt: 6,
                }}
            >
                {skillsCards.map((item) => (
                    <Box
                        key={item.label}
                        sx={{
                            backgroundColor: "#fff",
                            p: 3,
                            borderRadius: "16px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            },
                        }}
                    >
                        {item.icon}
                        <Typography fontWeight={500}>{item.label}</Typography>
                    </Box>
                ))}
            </Box>

            {/* TECH STACK */}
            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: "center",
                    maxWidth: "800px",
                    mx: "auto",
                }}
            >
                {techStack.map((tech) => (
                    <Button
                        key={tech}
                        variant="outlined"
                        sx={{
                            borderRadius: "20px",
                            textTransform: "none",
                            px: 2.5,
                            fontSize: "14px",
                        }}
                    >
                        {tech}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
