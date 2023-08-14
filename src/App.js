import logo from './logo.svg';
import './App.css';
import MainHeader from './pages/header';
import Detail from './post/postdetail';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

function App({ Component, pageProps }) {
  return (
    <>
    <BrowserRouter>
      <MainHeader></MainHeader>
      <Routes>
        {/* <Route exact path="/" element={<MainHeader />}/> */}
        <Route path="/postdetail/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
