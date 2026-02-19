import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 7 },
                px: { xs: 2, md: 6 },
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "900px",
                    textAlign: "center",
                }}
            >
                {/* SECTION TITLE */}
                <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{ mb: 1 }}
                >
                    About Me
                </Typography>

                <Typography
                    sx={{
                        width: "60px",
                        height: "4px",
                        backgroundColor: "primary.main",
                        mx: "auto",
                        mb: 4,
                        borderRadius: "2px",
                    }}
                />

                {/* PARAGRAPHS */}
                <Typography
                    sx={{
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "text.secondary",
                        mb: 3,
                    }}
                >
                    I’m a passionate full-stack developer with 1+ year of experience
                    building modern web applications. I specialize in <b>.NET Framework & .NET Core</b>,
                    <b> React</b>, and <b>SQL Server</b>, with a strong focus on clean architecture
                    and performance.
                </Typography>

                <Typography
                    sx={{
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "text.secondary",
                        mb: 3,
                    }}
                >
                    I’m a Computer Science graduate (2025) with a CGPA of <b>8.54</b> from
                    <b> Manav Rachna University</b>. I began my professional journey in
                    January 2025 during my 8th semester as a Full-Stack .NET Developer
                    Intern.
                </Typography>

                <Typography
                    sx={{
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "text.secondary",
                        mb: 3,
                    }}
                >
                    My journey into software development started with curiosity about how
                    things work behind the scenes. Over time, that curiosity turned into
                    a passion for solving real-world problems through scalable and
                    user-friendly solutions.
                </Typography>

                <Typography
                    sx={{
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "text.secondary",
                    }}
                >
                    When I’m not coding, I enjoy exploring new technologies, improving my
                    development workflow, and sharing knowledge with other developers.
                </Typography>


            </Box>
        </Box>
    );
};

export default AboutMe;
