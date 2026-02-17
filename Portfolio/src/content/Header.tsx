import { Box, Typography, Link } from "@mui/material";

const Header = () => {
    const sections: string[] = [
        "About",
        "Skills",
        "Projects",
        "Contact",
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around"
            }}
        >
            <Box>
                <Typography variant="h5">PORTFOLIO</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                }}
            >
                {sections.map((item) => (
                    <Link key={item} sx={{
                        textDecoration: "none",
                        color: "black",
                        cursor:"pointer",
                        fontSize:"22px"
                    }}>
                        {item}
                    </Link>
                ))}
            </Box>
        </Box >
    );
};

export default Header;
