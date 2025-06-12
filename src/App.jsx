import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
function App() {
  return (
    <div>
      <Header />
      <div className='app-body'>
      <Home />
      </div>
    </div>
  )
}

export default App
