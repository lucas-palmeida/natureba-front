import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './globalstyles';
import Registration from './pages/cadastro';
import Login from './pages/login';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';
import Home from './pages/home';



function App() {

  const [apiForm , setApiForm] = useState({})

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
          apiForm={apiForm}
          />}/>
         
         

      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );

}

export default App;
