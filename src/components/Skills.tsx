import React from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Skills.css";

interface SkillRow {
  title: string;
  items: { name: string; level: number }[];
}

// Expanded floating skills - comprehensive for AI/Data Science/Data Engineer/Analyst roles
const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "Scala", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Airflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Plotly", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  // Additional skills for AI/Data roles
  { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Anaconda", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

// All skill categories in a single flat array for carousel
const SKILL_CATEGORIES: SkillRow[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 92 },
      { name: "R", level: 85 },
      { name: "PySpark", level: 88 },
      { name: "Java", level: 80 },
      { name: "Scala", level: 75 },
    ],
  },
  {
    title: "AI/ML & NLP",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "LangChain & RAG", level: 92 },
      { name: "Hugging Face", level: 88 },
      { name: "scikit-learn", level: 95 },
      { name: "XGBoost/LightGBM", level: 90 },
    ],
  },
  {
    title: "Data Visualization & BI",
    items: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 88 },
      { name: "Plotly", level: 92 },
      { name: "Streamlit", level: 95 },
      { name: "Matplotlib/Seaborn", level: 90 },
      { name: "Looker Studio", level: 85 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      { name: "AWS (SageMaker, S3, EC2)", level: 88 },
      { name: "GCP (BigQuery, Vertex AI)", level: 85 },
      { name: "Azure ML", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "CI/CD Pipelines", level: 85 },
    ],
  },
  {
    title: "Data Engineering",
    items: [
      { name: "Apache Spark", level: 90 },
      { name: "Apache Kafka", level: 88 },
      { name: "Apache Airflow", level: 92 },
      { name: "Databricks", level: 90 },
      { name: "Snowflake", level: 85 },
      { name: "Delta Lake", level: 88 },
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Pinecone/ChromaDB", level: 90 },
      { name: "AWS Redshift", level: 85 },
      { name: "Elasticsearch", level: 80 },
    ],
  },
  {
    title: "MLOps & Tools",
    items: [
      { name: "MLflow", level: 90 },
      { name: "Great Expectations", level: 85 },
      { name: "FastAPI", level: 92 },
      { name: "Git/GitHub Actions", level: 90 },
      { name: "Terraform", level: 78 },
      { name: "DVC", level: 82 },
    ],
  },
  {
    title: "Soft Skills & Methods",
    items: [
      { name: "A/B Testing", level: 92 },
      { name: "Statistical Analysis", level: 90 },
      { name: "Stakeholder Management", level: 88 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Technical Writing", level: 85 },
      { name: "Problem Solving", level: 95 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03, duration: 0.5 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
};

// Animated Progress Bar Component
const AnimatedProgressBar = ({ level, delay, inView }: { level: number; delay: number; inView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div className="skill-progress">
      <motion.div
        className="skill-progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.2, ease: "easeOut", delay: delay / 1000 }}
      />
      <div className="skill-progress-glow" style={{ width: `${width}%` }} />
    </div>
  );
};

// Skill Card Component for Carousel
const SkillCard = ({ category, isActive }: { category: SkillRow; isActive: boolean }) => {
  return (
    <motion.div
      className="carousel-skill-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="carousel-card-title">{category.title}</h3>
      <ul className="carousel-skill-list">
        {category.items.map((item, j) => (
          <li key={j} className="carousel-skill-item">
            <div className="skill-item-header">
              <span>{item.name}</span>
              <span className="skill-percent">{item.level}%</span>
            </div>
            <AnimatedProgressBar level={item.level} delay={100 + j * 80} inView={isActive} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Skills = () => {
  const controls = useAnimation();
  const stageRef = useRef(null);
  const sectionRef = useRef(null);
  const isStageInView = useInView(stageRef, { once: true, margin: "-100px" });
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalCategories = SKILL_CATEGORIES.length;

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCategories);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, totalCategories]);

  // Navigation handlers
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCategories) % totalCategories);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Resume auto-rotate after 8 seconds
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCategories);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  useEffect(() => {
    if (isStageInView) controls.start("visible");
  }, [isStageInView, controls]);

  // Add floating animation to skills
  useEffect(() => {
    const stage = stageRef.current as HTMLElement | null;
    if (!stage) return;
    const circles = stage.querySelectorAll(".skill-circle");
    circles.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      const angle = (i / circles.length) * Math.PI * 2;
      const radius = 20 + Math.random() * 15;
      htmlEl.animate(
        [
          { transform: `translate(0, 0)` },
          {
            transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
          },
          { transform: `translate(0, 0)` },
        ],
        {
          duration: 4000 + Math.random() * 2000,
          iterations: Infinity,
          easing: "ease-in-out",
          delay: i * 100,
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="skills-container" ref={sectionRef}>
      {/* Animated Background */}
      <div className="skills-bg-effects">
        <div className="skills-orb skills-orb-1" />
        <div className="skills-orb skills-orb-2" />
        <div className="skills-orb skills-orb-3" />
      </div>

      <motion.div className="skills-header" variants={fadeUp} initial="hidden" animate={controls}>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="grad">Skills</span>
        </motion.h2>
        <motion.div
          className="skills-underline"
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="skills-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-stack data expertise: AI Engineering, Data Science, Analytics, Data Engineering & BI
        </motion.p>
      </motion.div>

      {/* FLOATING ICON CLOUD - Expanded */}
      <motion.div
        ref={stageRef}
        className="skills-stage"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {SKILLS.map((s, i) => {
          // Calculate grid position for each skill (8 columns x 4 rows for 32 skills)
          const cols = 8;
          const rows = Math.ceil(SKILLS.length / cols);
          const col = i % cols;
          const row = Math.floor(i / cols);

          // Calculate percentage positions with padding from edges
          const leftPercent = 8 + (col * (84 / (cols - 1))); // 8% to 92%
          const topPercent = 10 + (row * (80 / (rows - 1))); // 10% to 90%

          // Add slight randomness for organic feel
          const randomOffsetX = (Math.random() - 0.5) * 4;
          const randomOffsetY = (Math.random() - 0.5) * 4;

          return (
            <motion.div
              key={s.name}
              className="skill-circle"
              variants={scaleIn}
              custom={i}
              style={{
                left: `calc(${leftPercent}% + ${randomOffsetX}px)`,
                top: `calc(${topPercent}% + ${randomOffsetY}px)`,
              }}
              whileHover={{
                scale: 1.3,
                zIndex: 10,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={s.logo} className="skill-logo" alt={s.name} />
              <span className="skill-name">{s.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CAROUSEL SECTION */}
      <div
        className="skills-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={goToPrev}
          aria-label="Previous skill category"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <SkillCard
              key={currentIndex}
              category={SKILL_CATEGORIES[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </div>

        <button
          className="carousel-nav carousel-nav-next"
          onClick={goToNext}
          aria-label="Next skill category"
        >
          <ChevronRight size={28} />
        </button>

        {/* Pagination Indicator */}
        <div className="carousel-pagination">
          <span className="carousel-counter">
            {currentIndex + 1} / {totalCategories}
          </span>
          <div className="carousel-dots">
            {SKILL_CATEGORIES.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToIndex(index)}
                aria-label={`Go to ${SKILL_CATEGORIES[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
