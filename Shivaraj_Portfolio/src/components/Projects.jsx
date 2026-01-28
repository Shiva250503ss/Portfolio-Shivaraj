import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "DataPilot-AI - Intelligent Data Analysis Platform",
    desc: "RAG-based conversational AI using LangChain, OpenAI GPT-4, and ChromaDB for natural language to SQL translation with real-time Streamlit visualizations. Reduced query response time by 60%.",
    image: "/datapilot.jpg",
    tech: ["LangChain", "GPT-4", "ChromaDB", "Streamlit", "RAG"],
    live: "#",
    code: "https://github.com/Shiva250503ss/DataPilot-AI",
  },
  {
    title: "TrustLens AI - Real-Time Toxicity Detection",
    desc: "BERT-based multi-label toxicity classifier with GPU-accelerated inference, FastAPI async backend, and Chrome Extension for Reddit analysis. Classifies 6 toxicity categories in real-time.",
    image: "/trustlens.png",
    tech: ["BERT", "FastAPI", "Chrome Extension", "NLP", "Hugging Face"],
    live: "#",
    code: "https://github.com/Shiva250503ss/TrustLens-AI",
  },
  {
    title: "AIDIY - AI-Powered Financial Literacy Platform",
    desc: "GPT-4o EdTech platform with speech-to-text processing, JWT authentication, MongoDB aggregation, and Redis caching for gamified financial education for children.",
    image: "/aidiy.jpg",
    tech: ["GPT-4o", "MongoDB", "Redis", "FastAPI", "JWT"],
    live: "#",
    code: "https://github.com/Shiva250503ss/AIDIY",
  },
  {
    title: "Smart Fields - IoT Data Lake for Agriculture",
    desc: "Delta Lake architecture processing 100TB+ IoT sensor data with Kafka Connect handling 1M+ readings/minute. ResNet-9 disease detection achieving 94% F1-score on 38 crop diseases.",
    image: "/smartfield.jpg",
    tech: ["Delta Lake", "Kafka", "PyTorch", "Flask", "ResNet-9"],
    live: "#",
    code: "https://github.com/Shiva250503ss/Smart-Fields",
  },
  {
    title: "CU Boulder Campus Safety Dashboard",
    desc: "Real-time analytics dashboard with Streamlit and Plotly featuring multi-axis interactive charts, ETL pipeline with Pandas computing 15+ safety metrics and KPI scorecards.",
    image: "/cu-safety-dashboard.png",
    tech: ["Streamlit", "Plotly", "Pandas", "Python", "ETL"],
    live: "#",
    code: "https://github.com/Shiva250503ss/CU-Campus-Safety",
  },
  {
    title: "Job Market Intelligence Platform",
    desc: "End-to-end analytics pipeline processing 1,145+ job listings with 70+ interactive visualizations. PCA, K-Means, and DBSCAN for job clustering plus association rule mining.",
    image: "/job-market.jpg",
    tech: ["Python", "scikit-learn", "Plotly", "K-Means", "PCA"],
    live: "#",
    code: "https://github.com/Shiva250503ss/Job-Market-Intelligence",
  },
  {
    title: "Virtual Try-On - Computer Vision Pipeline",
    desc: "Distributed data pipeline on AWS S3 with batch processing for 10K+ images. Docker + TorchServe achieving 30ms latency with pose estimation preprocessing.",
    image: "/virtual-tryon.jpg",
    tech: ["PyTorch", "AWS S3", "Docker", "TorchServe", "OpenCV"],
    live: "#",
    code: "https://github.com/Shiva250503ss/Virtual-Try-On",
  },
  {
    title: "Benchmark Studio - ML Performance Analytics",
    desc: "ETL pipeline with voting ensemble classifier combining RandomForest, XGBoost, CatBoost, and LightGBM. Interactive web dashboard for data-driven model selection.",
    image: "/benchmark-studio.jpg",
    tech: ["XGBoost", "CatBoost", "LightGBM", "JavaScript", "ETL"],
    live: "#",
    code: "https://github.com/Shiva250503ss/Benchmark-Studio",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      {/* Background Effects */}
      <div className="projects-bg-effects">
        <div className="projects-orb projects-orb-1" />
        <div className="projects-orb projects-orb-2" />
      </div>

      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="projects-title"
        >
          My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of AI/ML, Data Engineering & Analytics projects — demonstrating end-to-end data solutions.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.08,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image with Overlay */}
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image-container">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-image-overlay">
                    <Sparkles className="overlay-icon" />
                  </div>
                </div>
              </motion.div>

              <div className="project-content">
                <motion.h3
                  className="project-heading"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {p.title}
                </motion.h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="code-btn"
                  >
                    <Github size={16} /> View Code
                  </motion.a>

                  {p.live !== "#" && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="live-btn"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
