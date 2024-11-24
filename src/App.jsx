import "./App.css";
import Header from "./components/Header";
import PlayerSection from "./components/PlayerSection";
import TriviaPage from "./pages/TriviaPage";
import { QuestionProvider } from "./context/QuestionContext";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
  return (
    <div id="main-container">
      <Header />
      <div id="quiz-container">
        <PlayerProvider>
          <QuestionProvider>
            <TriviaPage />
            <PlayerSection />
          </QuestionProvider>
        </PlayerProvider>
      </div>
    </div>
  );
}

export default App;
