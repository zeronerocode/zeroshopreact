import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart, Category, CustomerLogin, CustomerRegister, Home, MyBag, Product, Profile, SellProduct, UploadFile} from './page'
import RequireAuth from './components/RequireAuth';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/user/login' element = {<CustomerLogin/>}/>
        <Route path='/user/register' element = {<CustomerRegister/>}/>
        <Route path='/product/:id' element = {<Product/>}/>
        <Route path='/sellproduct' element = {<SellProduct/>}/>
        <Route path='/uploadfile' element = {<UploadFile/>}/>
        <Route path='/mybag' element = {<MyBag/>}/>
        <Route path='/profile' element = {<Profile/>}/> 
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/category/:id' element = {<Category/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
