import logo from './logo.svg';
import './App.css';
import MainHeader from './pages/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <MainHeader></MainHeader>
    </BrowserRouter>
    </>
  );
}

export default App;
