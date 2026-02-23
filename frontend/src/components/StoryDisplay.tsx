import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface Props {
  result: string;
}

export default function StoryDisplay({ result }: Props) {
  return (
    <motion.div
      className="story-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="story-header">
        <h2>✨ Your Story Begins</h2>
        <span className="story-sub">The world is awakening...</span>
      </div>

      <div className="story-content">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    </motion.div>
  );
}