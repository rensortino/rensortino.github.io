import './App.css'
import Home from './Home'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AllProjects from './AllProjects';
import Footer from './sections/Footer';
import RadioTiramisu from './projects/radio-tiramisu';


function App() {

  return (
    <>
      <Router >
        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/radio-tiramisu" element={<RadioTiramisu />} />
        </Routes>
      </Router>
      < Footer />
    </>
  )
}

export default App
