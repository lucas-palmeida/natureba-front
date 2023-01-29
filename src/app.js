import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalstyles';
import Registration from './pages/cadastro';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import Home from './pages/Home';
import BuyCar from './pages/BuyCar';



function App() {

  const [apiForm , setApiForm] = useState({})
  const [carrinho, setCarrinho] = useState([])
  return (
    <LoginContext.Provider value={{apiForm}}>
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        
          <Route path='/' element={<Login 
          setApiForm={setApiForm}
           />}/>
          <Route path='/cadastro' element={<Registration
          />}/>
          <Route path='/home' element={<Home
          apiForm={apiForm} carrinho={carrinho} setCarrinho={setCarrinho}
          />}/>
          <Route path='/carrinho' element={<BuyCar
          apiForm={apiForm} carrinho={carrinho}
          />}/>
         


      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );

}

export default App;
