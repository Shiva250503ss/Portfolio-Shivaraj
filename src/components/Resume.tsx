import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Layers, Award } from "lucide-react";
import "./Resume.css";

export function Resume() {
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a href="/shivaraj_overall_resume.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE BOX */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-name"
          >
            Shivaraj Senthil Rajan
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="profile-info"
          >
            🎓 MS in Data Science — University of Colorado Boulder (GPA: 3.9/4.0)<br />
            📍 Boulder, CO (Open to Relocate)<br />
            📩 shse1502@colorado.edu | 📱 (720)-260-6977
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="profile-summary"
          >
            Versatile data professional with expertise spanning AI Engineering, Data Science, Data Analytics,
            Data Engineering, and Business Intelligence. Experienced in building RAG pipelines, deploying ML models
            at scale, architecting real-time streaming systems, and creating executive dashboards for data-driven decisions.
          </motion.p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <GraduationCap className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree: "Master of Science in Data Science",
                school: "University of Colorado Boulder",
                period: "Aug 2024 – May 2026",
                detail: "GPA: 3.9/4.0",
              },
              {
                degree: "Bachelor of Science in AI & Machine Learning",
                school: "Anna University, Chennai",
                period: "Aug 2020 – May 2024",
                detail: "GPA: 8.52/10",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{edu.degree}</h4>
                <p className="resume-card-school">{edu.school}</p>
                <p className="resume-card-period">
                  {edu.period} — <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box project-icon"
            >
              <Briefcase className="icon" />
            </motion.div>
            <h3>Experience</h3>
          </div>

          <div className="resume-list">
            {[
              {
                role: "AI Engineer / Data Scientist / Data Engineer / BI Analyst Intern",
                company: "PM Accelerator",
                period: "May 2025 – Nov 2025",
                location: "Florida, US",
              },
              {
                role: "AI Engineer / Data Analyst / Data Engineer",
                company: "Sandron Impex Private Limited",
                period: "Feb 2023 – May 2024",
                location: "Bengaluru, India",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{exp.role}</h4>
                <p className="resume-card-school">{exp.company}</p>
                <p className="resume-card-period">{exp.period} — {exp.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PUBLICATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="publication-section"
          style={{ marginTop: '60px' }}
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <Award className="icon" />
            </motion.div>
            <h3>Publication</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="resume-card"
          >
            <h4>Smart Fields: Enhancing Agriculture with Machine Learning</h4>
            <p className="resume-card-school">IEEE AIMLA 2024</p>
            <p className="resume-card-period">Published Research Paper on ML-based Precision Agriculture</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
