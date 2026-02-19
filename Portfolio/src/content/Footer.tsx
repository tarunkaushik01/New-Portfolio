import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box
            id="contact"
            sx={{
                pt: { xs: 8, md: 7 },
                pb: 6,
                px: { xs: 2, md: 6 },
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                color: "#ffffff",
                textAlign: "center",
            }}
        >
            {/* CTA */}
            <Typography variant="h4" fontWeight={600} mb={1}>
                Let’s Work Together
            </Typography>

            <Typography
                sx={{
                    maxWidth: "600px",
                    mx: "auto",
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                }}
            >
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of something impactful.
            </Typography>

            {/* ACTION BUTTONS */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    mt: 4,
                }}
            >
                <Button
                    component="a"
                    href="mailto:tarun@example.com?subject=Portfolio%20Inquiry"
                    variant="contained"
                    sx={{
                        px: 4,
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 500,
                    }}
                >
                    Email Me
                </Button>

                <Button
                    component="a"
                    href="https://github.com/tarunkaushik01"
                    target="_blank"
                    variant="outlined"
                    sx={{
                        px: 4,
                        borderRadius: "30px",
                        textTransform: "none",
                        color: "#ffffff",
                        borderColor: "#ffffff",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderColor: "#ffffff",
                        },
                    }}
                >
                    GitHub
                </Button>

                <Button
                    component="a"
                    href="https://www.linkedin.com/in/tarunkaushik123"
                    target="_blank"
                    variant="outlined"
                    sx={{
                        px: 4,
                        borderRadius: "30px",
                        textTransform: "none",
                        color: "#ffffff",
                        borderColor: "#ffffff",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderColor: "#ffffff",
                        },
                    }}
                >
                    LinkedIn
                </Button>
            </Box>

            {/* FOOTER NOTE */}
            <Typography
                sx={{
                    mt: 6,
                    fontSize: "14px",
                    color: "#94a3b8",
                }}
            >
                © {new Date().getFullYear()} Tarun. Built with React & MUI.
            </Typography>
        </Box>
    );
};

export default Footer;
