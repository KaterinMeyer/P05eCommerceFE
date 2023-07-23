import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Auth/Login/Login.jsx'
import { SignUp } from './pages/Auth/Signup/Signup.jsx'
import { Profile } from './pages/Profile/Profile.jsx';
import Product from './pages/Products/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'

export const App = () => {

  return (

    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/*Rutas públicas*/}
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/home' element={<Home></Home>}>
          </Route>
          <Route path='/products' element={<Products></Products>}>
          </Route>
          <Route path='/products/:productId' element={<Product></Product>}>
          </Route>
          <Route path='/auth/login' element={<Login></Login>}>
          </Route>
          <Route Route path='/auth/signup' element={<SignUp></SignUp>}>
          </Route>

          {/*Rutas privadas*/}
          {<Route path='/profile' element={<Profile></Profile>}>
          </Route>}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App