import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            I'm Ibrahim Aliyev, a Frontend Developer with a strong focus on
            building efficient and user-centered web applications. I hold a
            Master's degree in Computer Science from the French-Azerbaijani
            University and a Bachelor's degree in Computer Science from Baku
            State University.
          </p>
          <p>
            Over the past few years, I've worked on diverse projects — from
            project management platforms to multi-language educational and
            marketplace applications. My recent experience at Perfect Infinity
            and Taskilled allowed me to design and implement key modules that
            improved workflow efficiency, enhanced user experience, and
            supported complex business logic.
          </p>
          <p>
            I specialize in React and Next.js, using modern tools like
            TypeScript, Redux Toolkit, and React Query to write clean,
            maintainable code. I'm also passionate about crafting smooth and
            accessible UIs using Tailwind CSS, Shadcn-ui, and other modern
            design systems.
          </p>
          <p>
            Beyond coding, I enjoy collaborating with backend and design teams,
            solving UI/UX challenges, and continuously learning new technologies
            to stay ahead in the fast-evolving web ecosystem.
          </p>
          <p>
            If you're looking for a developer who values both performance and
            user experience — someone who turns complex ideas into simple,
            beautiful interfaces — I'd love to connect.
          </p>

          <a href="#contact" className="btn btn-primary">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
