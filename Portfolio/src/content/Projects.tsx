import { Box, Typography, Chip} from "@mui/material";

const projects = [
    {
        title: "College ERP Management System",
        description:
            "A full-featured ERP system designed to manage students, faculty, attendance, fees, and academic records. Built with a secure role-based architecture for admins, staff, and students.",
        tech: [".NET", "SQL Server", "JavaScript", "Razor Pages", "jQuery"],
    },
    {
        title: "Online Digital Meter Handling System",
        description:
            "A web-based system for managing digital meter data, readings, and reports. Includes dynamic filtering, data validation, and optimized SQL queries for large datasets.",
        tech: [".NET", "SQL Server", "JavaScript", "Razor Pages", "jQuery"],
    },
    {
        title: "Student Registration Form",
        description:
            "A full-stack student registration application with a React frontend and .NET backend. Supports form validation, secure data storage, and clean API integration.",
        tech: ["React", ".NET", "SQL Server"],
    },
];

const Projects = () => {
    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 8, md: 7 },
                px: { xs: 2, md: 6 },
                backgroundColor: "#ffffff",
            }}
        >
            {/* TITLE */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h4" fontWeight={600}>
                    Featured Projects
                </Typography>
                <Typography
                    sx={{
                        color: "text.secondary",
                        maxWidth: "600px",
                        mx: "auto",
                        mt: 1,
                    }}
                >
                    A selection of real-world projects showcasing my full-stack
                    development experience.
                </Typography>
            </Box>

            {/* PROJECT CARDS */}
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 4,
                }}
            >
                {projects.map((project) => (
                    <Box
                        key={project.title}
                        sx={{
                            backgroundColor: "#f9fafb",
                            p: 4,
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            },
                        }}
                    >
                        <Box>
                            <Typography variant="h6" fontWeight={600} mb={1}>
                                {project.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "text.secondary",
                                    lineHeight: 1.7,
                                    mb: 3,
                                }}
                            >
                                {project.description}
                            </Typography>

                            {/* TECH STACK */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {project.tech.map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        sx={{
                                            backgroundColor: "#ffffff",
                                            fontSize: "13px",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
