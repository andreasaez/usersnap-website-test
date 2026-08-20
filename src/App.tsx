import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResearchDiscoveryPage from './pages/ResearchDiscoveryPage'
import RoadmapsPage from './pages/RoadmapsPage'
import IntegrationsPage from './pages/IntegrationsPage'
import IntegrationsDirectoryPage from './pages/IntegrationsDirectoryPage'
import McpPage from './pages/McpPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/platform/research-discovery" element={<ResearchDiscoveryPage />} />
      <Route path="/platform/roadmaps" element={<RoadmapsPage />} />
      <Route path="/platform/integrations" element={<IntegrationsPage />} />
      <Route path="/integrations" element={<IntegrationsDirectoryPage />} />
      <Route path="/mcp" element={<McpPage />} />
    </Routes>
  )
}

export default App
