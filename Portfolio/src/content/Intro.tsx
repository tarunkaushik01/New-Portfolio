import { Box, Button, Typography } from "@mui/material";

const Intro = () => {
    const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
    return (
        <Box
            sx={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                background: "linear-gradient(135deg, #f9fafb, #eef2ff)",
                py:0
            }}
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    alignItems: "center",
                    gap: { xs: 6, md: 10 },
                    ml:2 ,

                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center",
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                        // border:"1px solid black",
                        ml:2
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        sx={{ mb: 2 }}
                    >
                        Hi, I’m Tarun 👋
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: "primary.main",
                            mb: 2,
                        }}
                    >
                        Full-Stack Developer & Creative Problem Solver
                    </Typography>

                    <Typography
                        sx={{
                            textAlign:"center",
                            fontSize: "16px",
                            color: "text.secondary",
                            lineHeight: 1.7,
                            maxWidth: "520px",
                            mx: { xs: "auto", md: 0 },                           
                            width:"100%",
                        }}
                    >
                        I build modern web applications with a strong focus on user
                        experience, performance, and clean architecture. I enjoy turning
                        complex ideas into simple, scalable solutions.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            mt: 4,
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => handleScroll('projects')}
                            sx={{
                                px: 4,
                                borderRadius: "30px",
                                textTransform: "none",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                            }}
                        >
                            View My Work
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => handleScroll('contact')}

                            sx={{
                                px: 4,
                                borderRadius: "30px",
                                textTransform: "none",
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Box>
                </Box>

                {/* RIGHT IMAGE */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/Images/ProfilePicture.png"
                        alt="Tarun"
                        sx={{
                            height: { xs: 300, md: 500 },
                            width: "auto",
                            borderRadius: "20px",
                            ml:-2,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Intro;
