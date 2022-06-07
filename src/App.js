import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CustomerLogin, CustomerRegister, Home, Product} from './page'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {(<Home/>)}/>
        <Route path='/home' element = {(<Home/>)}/>
        <Route path='/user/login' element = {(<CustomerLogin/>)}/>
        <Route path='/user/register' element = {(<CustomerRegister/>)}/>
        <Route path='/product' element = {(<Product/>)}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
