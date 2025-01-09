import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import IsuersItem from '../pages/IsuersItem'
import Issuers from '../pages/Issuers'
import Categories from '../pages/Categories'
import CategoriesItem from '../controllers/CategoriesItem'
import CreditCard from '../pages/CreditCard'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/card' element={<CreditCard/>}/>
      {/* <Route path='/card/:id' element={<Categories/>}/> */}
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/categories/:id' element={<CategoriesItem/>}/>
      <Route path='/issuers' element={<Issuers/>}/>
      <Route path='/issuers/:id' element={<IsuersItem/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Router
