import { useState } from 'react';
import ThemeSelector  from './components/ThemeSelector';
import StoryDisplay from './components/StoryDisplay';
import LoadingScreen from './components/LoadingScreen';
import { runGame } from './services/api';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStart = async (selectedTheme: string) => {
    setLoading(true);
    setResult("");
    
    try {
      const response = await runGame(selectedTheme);  
      setResult(response.result);
    }catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="root"> 
      <div className="app-container">
        {!loading && !result && (
          <ThemeSelector onSelectedTheme={handleStart} />
        )}

        {loading && <LoadingScreen  />}
      </div>
      
      <div className="result">
        {!loading && result && <StoryDisplay result={result} />}
      </div>
    </div>
  );
}

export default App;