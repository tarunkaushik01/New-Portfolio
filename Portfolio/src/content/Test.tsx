import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TARUN</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Hi, I’m Tarun <span className="wave">👋</span>
          </h1>

          <h2>Full-Stack Developer & Creative Problem Solver</h2>

          <p>
            I build modern web applications with a strong focus on user
            experience, performance, and clean architecture. I enjoy turning
            complex ideas into simple, scalable solutions.
          </p>

          <div className="buttons">
            <button className="primary">View My Work</button>
            <button className="secondary">Get In Touch</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-card">
            <img src="/Images/ProfilePicture.png" alt="Tarun" />
          </div>
        </div>

        {/* Particles */}
        <div className="particles"></div>
      </section>
    </>
  );
};

export default Hero;