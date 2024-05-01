import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Toaster } from "react-hot-toast";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { useAuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute isAllowed={!!authUser} redirectTo="/login">
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/login' element={
            <ProtectedRoute isAllowed={!authUser} redirectTo="/">
              <Login />
            </ProtectedRoute>
          } />
          <Route path='/signup' element={
            <ProtectedRoute isAllowed={!authUser} redirectTo="/">
              <SignUp />
            </ProtectedRoute>
          } />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
}

export default App
