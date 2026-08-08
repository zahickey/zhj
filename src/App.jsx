import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Zoe from './pages/about/Zoe.jsx'
import CV from './pages/about/CV.jsx'
import SeniorThesis from './pages/projects/SeniorThesis.jsx'
import DecisionMaking from './pages/algorithms/DecisionMaking.jsx'
import NeurIPS from './pages/algorithms/NeurIPS.jsx'
import Other from './pages/algorithms/Other.jsx'
import Alaska from './pages/fun/Alaska.jsx'
import Yoga from './pages/fun/Yoga.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/zoe" element={<Zoe />} />
        <Route path="/about/cv" element={<CV />} />
        <Route path="/projects/senior-thesis" element={<SeniorThesis />} />
        <Route path="/algorithms/decision-making" element={<DecisionMaking />} />
        <Route path="/algorithms/neurips" element={<NeurIPS />} />
        <Route path="/algorithms/other" element={<Other />} />
        <Route path="/fun/alaska" element={<Alaska />} />
        <Route path="/fun/yoga" element={<Yoga />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
