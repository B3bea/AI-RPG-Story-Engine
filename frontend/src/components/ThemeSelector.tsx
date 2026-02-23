import { motion } from "framer-motion";

const themes = [
  { name: "Fantasy", emoji: "🧙‍♂️" },
  { name: "Cyberpunk", emoji: "🤖" },
  { name: "Horror", emoji: "👁️" },
  { name: "Space Opera", emoji: "🚀" },
];

interface Props {
  onSelectedTheme: (theme: string) => void;
}

export default function ThemeSelector({ onSelectedTheme }: Props) {
  return (
    <div className="hero-container">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your Adventure ✨
      </motion.h1>

      <div className="theme-grid">
        {themes.map((theme, index) => (
          <motion.button
            key={theme.name}
            className="theme-btn"
            onClick={() => onSelectedTheme(theme.name)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="emoji">{theme.emoji}</span>
            {theme.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}