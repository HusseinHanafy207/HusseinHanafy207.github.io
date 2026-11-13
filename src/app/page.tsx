import { HighlightText } from "@/components/HighlightText";
import { Sidebar } from "@/components/Sidebar";
import {
  awards,
  education,
  experience,
  projects,
  site,
  skills,
} from "@/content/site";

export default function HomePage() {
  return (
    <div id="top" className="container layout">
      <Sidebar />

      <div>
        <section id="about" className="section">
          <h2>About</h2>
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {site.collaboration}{" "}
            <a href={`mailto:${site.email}`}>Contact me</a>.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          {projects.map((project) => (
            <article key={project.title} className="project">
              <h3>{project.title}</h3>
              <p className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
              <p>{project.summary}</p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>
                    <HighlightText text={bullet} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="experience" className="section experience">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article
              key={`${job.org}-${job.title}`}
              className="experience-item"
            >
              <h3>
                {job.title}
                <span className="org"> · {job.org}</span>
              </h3>
              <p className="meta">{job.dates}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          {education.map((edu) => (
            <article key={edu.school} className="edu-item">
              <h3>{edu.school}</h3>
              <p className="meta">
                {edu.degree} · {edu.dates}
              </p>
              <p>
                GPA <strong className="metric">{edu.gpa}</strong> ·{" "}
                {edu.honors.join(", ")}
              </p>
              <p>
                <strong>Relevant coursework:</strong>{" "}
                {edu.coursework.join(", ")}
              </p>
            </article>
          ))}
        </section>

        <section id="awards" className="section awards">
          <h2>Awards & Honors</h2>
          <ul>
            {awards.map((award) => (
              <li key={award.title} className="award-item">
                <strong>{award.title}.</strong> {award.detail}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            {skills.map((group) => (
              <li key={group.group}>
                <span>{group.group}:</span> {group.items}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
