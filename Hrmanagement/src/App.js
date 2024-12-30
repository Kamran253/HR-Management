import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Solutions from './Pages/Solutions';
import Resources from './Pages/Resources';
import Company from './Pages/Company';
import Pricing from './Pages/Pricing';
import ForIndividuals from './Pages/ForIndividuals';
import Login from './Pages/LoginPage';
import EmployeeManagement from "./Componenet/EmployeeManagement";
import ProtectedRoute from './Componenet/ProtectedRoute';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/Home" element={<ProtectedRoute element={<Home />} isAuthenticated={isAuthenticated} />} />

          <Route path="/Products" element={<ProtectedRoute element={<Products />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Solutions" element={<ProtectedRoute element={<Solutions />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Resources" element={<ProtectedRoute element={<Resources />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Company" element={<ProtectedRoute element={<Company />} isAuthenticated={isAuthenticated} />} />
          <Route path="/Pricing" element={<ProtectedRoute element={<Pricing />} isAuthenticated={isAuthenticated} />} />
          <Route path="/ForIndividuals" element={<ProtectedRoute element={<ForIndividuals />} isAuthenticated={isAuthenticated} />} />
          <Route path="/EmployeeManagement" element={<ProtectedRoute element={<EmployeeManagement />} isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
