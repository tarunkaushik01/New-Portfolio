import { Box, Typography, Link } from "@mui/material";

const Header = () => {
  const sections = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 100,        
        width:"100%"

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 6,
          py: 2,
        }}
      >
        <Typography fontWeight={700}>PORTFOLIO</Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {sections.map((item) => (
            <Link
              key={item.id}
              underline="none"
              sx={{ cursor: "pointer", color: "black" }}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
