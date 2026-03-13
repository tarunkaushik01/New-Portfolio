import { Box, Button, Typography } from "@mui/material";
// import Snowfall from "react-snowfall";

const Intro = () => {
    const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
    return (
        <>
        {/* <Snowfall color="#f5f5ee" wind={[-1,1]} speed={[0.5, 2]} radius={[5,1]} /> */}
            <Box
            sx={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                // background:"linear-gradient(to right,pink, #106EBE)",
                py:0,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    alignItems: "center",
                    gap: { xs: 6,  },
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
                        ml:2,

                    }}
                >
                    <Typography
                        variant="h2"
                        fontWeight={600}
                        sx={{ mb: 2,color:"grey" }}
                        
                    >
                        {/* Hi, I’m Tarun 👋 */}
                        Hi, I'm <span style={{color:"blue"}}>Tarun Kaushik</span>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: 500,
                            mb: 2,
                        }}
                    >
                        Full-Stack Developer & Creative Problem Solver
                    </Typography>

                    <Typography
                        sx={{
                            textAlign:"center",
                            fontSize: "18px",
                            // color: "white",
                            color:"grey",
                            lineHeight: 1.7,
                            maxWidth: "700px",
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
                            variant="contained"
                            size="large"
                            onClick={() => handleScroll('contact')}
                            sx={{
                                px: 4,
                                borderRadius: "30px",
                                textTransform: "none",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                color:"#FFF"
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Box>
                </Box>

                {/* RIGHT IMAGE */}
                {/* <Box
                    sx={{
                        // flex: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/Images/ProfilePicture.png"
                        alt="Tarun"
                        sx={{
                            height: { xs: 300, md: 400 },
                            width: "auto",
                            borderRadius: "20px",
                            mr:10,
                            // border:"2px solid #fff",
                            border:"2px solid grey",
                            flex:1
                        }}
                    />
                </Box> */}
            </Box>
        </Box>
        </>
    );
};

export default Intro;
