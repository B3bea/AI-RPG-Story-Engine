import { motion } from "framer-motion";
import { useState } from "react";

const themes = [
  { name: "Fantasy", emoji: "🧙‍♂️" },
  { name: "Cyberpunk", emoji: "🤖" },
  { name: "Horror", emoji: "👁️" },
  { name: "Space Opera", emoji: "🚀" },
];

interface Props {
  onStartGame: (theme: string, notes?: string) => void;
}

export default function ThemeSelector({ onStartGame }: Props) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

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

    {!selectedTheme && (
      <div className="theme-grid">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className="theme-btn"
            onClick={() => setSelectedTheme(theme.name)}
          >
            <span className="emoji">{theme.emoji}</span>
            {theme.name}
          </button>
        ))}
      </div>
    )}
    
    {selectedTheme && (
      <motion.div
        className="notes-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3>✨ Add Optional Details</h3>

        <textarea
          placeholder="Describe anything you'd like in your story... (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="notes-textarea"
        />

        <button
          type="button"
          className="continue-btn"
          disabled={!selectedTheme}
          onClick={() => onStartGame(selectedTheme, notes)}
        >
          🚀 Generate Adventure
        </button>
      </motion.div>
    )}
    </div>
  );
}