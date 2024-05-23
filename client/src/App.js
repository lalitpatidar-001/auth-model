import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import LoginPage from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import RegistrationPage from './pages/RegistrationPage';
import VerifyPage from './pages/VerifyPage';

function App() {
  return (
    <Routes>
      <Route  path="/" element={<AuthLayout />} >
        <Route index path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/verifyemail" element={<VerifyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
