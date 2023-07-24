import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda'
import About from './pages/About'
import Blog from './pages/Blog'
import Sejarah from './pages/Sejarah'
import ArticleOne from './pages/ArticleOne'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/postOne' element={<ArticleOne />} />
        <Route path='/sejarah' element={<Sejarah />} />
      </Routes>
    </Router>
  )
}

export default App
