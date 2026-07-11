import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  )
}
