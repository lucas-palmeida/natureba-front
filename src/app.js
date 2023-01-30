import { BrowserRouter, Route, Routes, Redirect  } from 'react-router-dom';
import GlobalStyles from './globalstyles';
import Registration from './pages/cadastro';
import Login from './pages/login';
//import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import Home from './pages/Home';
import BuyCar from './pages/BuyCar';
import { AuthProvider } from './providers/auth';




function App() {

  //const [apiForm , setApiForm] = useState({})
  const [carrinho, setCarrinho] = useState([])
  return (

    <AuthProvider>
    

    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        
          <Route path='/' element={<Login 
//          setApiForm={setApiForm}

           />}/>
          
          <Route path='/cadastro' element={<Registration
          />}/>
          <Route path='/home' element={<Home
          
          />}/>
          <Route path='/carrinho' element={<BuyCar
          carrinho={carrinho}
          />}/>
          <Redirect to="/home" />
         


      </Routes>
    </BrowserRouter>
    
    </AuthProvider>
  );

}

export default App;
