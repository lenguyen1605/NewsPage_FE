import logo from './logo.svg';
import './App.css';
import MainHeader from './pages/header';
import { BrowserRouter } from 'react-router-dom';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

function App({ Component, pageProps }) {
  return (
    <>
    <BrowserRouter>
    <MainHeader></MainHeader>
    </BrowserRouter>
    </>
  );
}

export default App;
