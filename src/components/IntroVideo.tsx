import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Database, BarChart3 } from "lucide-react";
import "./IntroVideo.css";

export default function IntroVideo({ onFinish }: { onFinish?: () => void }) {
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
    }, 25);

    const timer = setTimeout(() => {
      setHide(true);
      document.body.style.overflow = "auto";
      onFinish?.();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // icon state based on progress
  const icon =
    progress < 34 ? <Brain size={32} /> :
    progress < 67 ? <Database size={32} /> :
    <BarChart3 size={32} />;

  return (
    !hide && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 4.7, duration: 0.9 }}
        className="intro-video-wrapper"
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      >
        {/* Animated background gradient */}
        <div className="intro-bg-gradient"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="intro-title"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.2rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          Shivaraj Senthil Rajan | AI Engineer • Data Scientist • Data Engineer
        </motion.p>

        <div className="intro-progress">
          <div className="progress-track">
            <motion.div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ICON that changes */}
          <motion.div
            key={progress < 34 ? "brain" : progress < 67 ? "database" : "chart"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="progress-icon"
          >
            {icon}
          </motion.div>

          <span className="progress-text">
            {progress < 34
              ? "Loading AI & ML expertise..."
              : progress < 67
              ? "Initializing data pipelines..."
              : "Preparing analytics insights..."}
          </span>
        </div>
      </motion.div>
    )
  );
}
