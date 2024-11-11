import Navbar from './components/Header/Navbar'
import ItemListContainer3 from './components/ItemListContainer/ItemListContainer3'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemListContainer/ItemDetail'
import ItemDetail2 from './components/ItemListContainer/ItemDetail2'

export default function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer3/>}/>
          <Route path='/category/:id' element={<ItemListContainer3/>}/>
          <Route path='/item/:id' element={<ItemDetail/>}/>
          {/* <Route path='/item/:id' element={<ItemDetail2/>}/> */}
        </Routes>
      </BrowserRouter>
  )
}