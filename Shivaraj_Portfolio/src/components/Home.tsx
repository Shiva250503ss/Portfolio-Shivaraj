import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import "./Home.css";

const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";

export function Home() {
  const roles = [
    "AI Engineer",
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "BI Analyst",
  ];

  const connectLinks = [
    { img: linkedinLogo, link: "https://linkedin.com/in/shivaraj-senthil-rajan-2b8898227" },
    { img: gmailLogo, link: "mailto:shse1502@colorado.edu" },
    { img: githubLogo, link: "https://github.com/Shiva250503ss" },
  ];

  const [typedRoles, setTypedRoles] = useState("");
  const rolesText = "AI Engineer | Data Scientist | Data Analyst | Data Engineer | BI Analyst";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedRoles(rolesText.slice(0, i + 1));
      i++;
      if (i === rolesText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section id="home" className="hero-split">
      {/* LEFT SIDE - Text Content with Black Background */}
      <motion.div
        className="hero-left-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content-wrapper">
          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi! I'm <br />
            <span className="gradient-text hero-name-line">SHIVARAJ SENTHIL RAJAN</span>
            <motion.div className="hero-line" variants={itemVariants} />
          </motion.h1>

          <motion.p className="hero-intro typing-effect" variants={itemVariants}>
            {typedRoles}
          </motion.p>

          <motion.p className="hero-intro" variants={itemVariants}>
            Building AI-powered solutions & data-driven insights.
            Transforming complex data into actionable intelligence.
            MS in Data Science @ CU Boulder.
          </motion.p>

          <motion.div className="hero-roles" variants={itemVariants}>
            {roles.map((r, i) => (
              <motion.div key={i} className="role-tag" variants={itemVariants}>
                {r}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="hero-info" variants={itemVariants}>
            {[
              { label: "📍 Location", value: "Boulder, CO (Open to Relocate)" },
              { label: "💼 Expertise", value: "AI/ML, Data Science, Analytics" },
              { label: "📞 Contact", value: "shse1502@colorado.edu" },
            ].map((info, i) => (
              <motion.div key={i} className="info-card" whileHover={{ scale: 1.05, y: -3 }} variants={itemVariants}>
                <h4>{info.label}</h4>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <div className="social-group">
              <h5>Connect with me</h5>
              <div className="social-icons">
                {connectLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    variants={itemVariants}
                  >
                    <img src={s.img} className="social-icon" alt="" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="social-group">
              <h5>Want to know more about me?</h5>
              <motion.a
                href="/ai-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="chatbot-link"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <MessageCircle size={20} />
                Chat with My AI Assistant
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hero-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
          >
            <ArrowDown size={28} />
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Image */}
      <motion.div
        className="hero-right-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-image-container">
          <img src="/shivaraj2.png" alt="Shivaraj Senthil Rajan" className="hero-image" />
          <div className="hero-image-glow"></div>
        </div>
      </motion.div>
    </section>
  );
}
