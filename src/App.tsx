//import logo from './logo.svg';
//import React from 'react';
import './scss/app.scss';
//import axios from 'axios';

//import { Header } from './components/Header';
// import { Categories } from './components/Categories';
// import { Sort } from './components/Sort';
// import { PizzaBlock } from './components/PizzaBlock';
// import { Skeleton } from './components/PizzaBlock/Skeleton';
//import pizzas from './assets/pizzas.json'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NoteFound } from './pages/NoteFound';
import { FullPizza } from './pages/FullPizza';
import { MainLayout } from './layout/MainLayout';

//export const AppContecst = React.createContext();



function App() {

  //const [searchValue, setSearchValue] = React.useState('');

  return (
    

            <Routes>
              <Route path='/' element={<MainLayout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='pizza/:id' element={<FullPizza/>}/>
                <Route path='*' element={<NoteFound/>}/>
              </Route>
            </Routes>

        
  );
}

export default App;


