import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Professional Experience</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
        <article className="experience__item">
          <h3>Frontend Developer @Perfect Infinity</h3>

          <p>Feb. 2024 – Sep. 2024 | Remote</p>
          <ul>
            <li>
              Built core modules for project management platform, including task
              tracking, sheets, and document operations, improving internal
              workflow efficiency for project team.
            </li>
            <li>
              Developed features for home-improvement marketplace project,
              enabling users to create project requests, compare contractor
              offers, and accept proposals through a smooth multi-step UX.
            </li>
            <li>
              Implemented city-based flows for rent-a-car platform, including
              filtering, document submission, online payments, and dual login
              roles for renter and customer.
            </li>
          </ul>
        </article>
        <article className="experience__item">
          <h3>Frontend Developer @Taskilled</h3>
          <p>Dec. 2021 – Feb. 2024 | Baku, Azerbaijan</p>
          <ul>
            <li>
              Developed a full Hackathon Module, enabling users to form teams,
              upload projects, and present results — a feature that gained
              attention from ASAN Service and the Ministry of Education.
            </li>
            <li>
              Built a dynamic Groups Module, where users could join
              interest-based communities, share content, and interact; also
              added admin moderation tools to improve content quality.
            </li>
            <li>
              Created a Bootcamp Module supporting multi-course structures,
              pricing management, and request for scholarship logic (via
              Technest), improving user enrollment and program flexibility.
            </li>
            <li>
              Implemented multi-language support (via i18n library), allowing
              seamless language switching across the platform.
            </li>
          </ul>
        </article>
        <article className="experience__item">
          <h3>Mentor @CodeAcademy</h3>
          <p>Sep 2023 - Dec 2023 | Baku, Azerbaijan</p>
          <ul>
            <li>
              Assisted students with Front-end development tasks using HTML,
              CSS, JavaScript and React as part of the academy's program;
            </li>
            <li>
              Guided learners through practical coding challenges and debugging
              processes;
            </li>
            <li>
              Reviewed student assignments and gave feedback to improve code
              quality and UI structure.
            </li>
          </ul>
        </article>
        <article className="experience__item">
          <h3>Frontend developer @CubicsTechnology</h3>
          <p>Aug 2021 - Oct 2021 | Internship</p>
          <ul>
            <li>
              Developed UI components and features based on requirements and
              task assignments;
            </li>
            <li>
              Practiced responsive design and clean code principles using modern
              front-end technologies;
            </li>
            <li>
              Integrated mock APIs and handled client-side data interactions;
            </li>
            <li>
              Collaborated with mentors and teammates in a structured
              development environment;
            </li>
            <li>Improved skills through code reviews and debugging.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
