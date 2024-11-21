import './App.css'
import Header from './components/Header'
import PlayerSection from './components/PlayerSection'
import TriviaPage from './pages/TriviaPage'
import { QuestionProvider } from './context/QuestionContext';

function App() {
  return (
    <div id='main-container'>
      <Header />
      <div id='quiz-container'>
        <QuestionProvider>
        <TriviaPage />
        <PlayerSection />
        </QuestionProvider>
      </div>
    </div>
  )
}

export default App
