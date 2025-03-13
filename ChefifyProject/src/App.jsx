import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
