import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import AppLayout from './components/layout/AppLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
