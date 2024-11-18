import './App.css'
import Header from './components/Header'
import PlayerSection from './components/PlayerSection'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div id='main-container'>
      <Header />
      <div id='quiz-container'>
        <HomePage />
        <PlayerSection />
      </div>
    </div>
  )
}

export default App
